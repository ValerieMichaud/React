import ListErrors from './ListErrors';
import React from 'react';
import Dropzone from 'react-dropzone';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';


let _this;

const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want

const SortableItem = SortableElement(({index, value}) => {
  return (
    <tr>
      <td>
        {(value.delete) && (
          <DragHandle />
        )}  
      </td>
      <td>
        <div class="showtix-form__input">
          <input class="showtix-input" type="text" name="firstname" object={value.id} value={value.firstname} onChange={_this.handleCast.bind(this)} />
        </div>
      </td>
      <td>
        <div className="showtix-form__input">
          <input className="showtix-input" type="text" name="lastname" object={value.id} value={value.lastname} onChange={_this.handleCast.bind(this)} />
        </div>
      </td>
      <td>
        <div className="showtix-form__input">
          <input className="showtix-input" type="text" name="role" object={value.id} value={value.role} onChange={_this.handleCast.bind(this)} />
        </div>
      </td>
      <td>
        {(value.delete) && (
          <button object={value.id} onClick={_this.removeCast.bind(this)}>Delete</button>
        )}
      </td>
    </tr>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <tbody>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </tbody>
  );
});


@inject('editorStore')
@withRouter
@observer
export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      files: [],
      casts: [{
        id: 0,
        firstname: 'aasdasd',
        lastname: 'asdasd',
        role: 'asdasd',
        delete: true
      },
      {
        id: 1,
        firstname: '',
        lastname: '',
        role: '',
        delete: false
      }],
      prices: ['price-0']
    };
  }

  state = {
    tagInput: '',
  };

  onDrop(files) {
    this.setState({
      files
    });
  }

  handleCast(e) {
    let value = e.target.value;
    let object = e.target.attributes.getNamedItem('object').value;
    let property = e.target.name;
    let castUpdate = _this.state.casts;
    var index = castUpdate.findIndex(x => x.id == object);
    castUpdate[index][property] = value;
    _this.setState({casts: castUpdate});
    _this.checkIfAddRow();
  }

  removeCast(e) {
    let object = e.target.attributes.getNamedItem('object').value;
    let castUpdate = _this.state.casts;
    var index = castUpdate.findIndex(x => x.id == object);
    castUpdate.splice(index,1);
    _this.setState({casts: castUpdate});
  }

  checkIfAddRow() {
    let castUpdate = _this.state.casts;
    let castsLength = _this.state.casts.length;
    
    castUpdate.forEach(function(part, index, cast) {
      if(part.firstname.length > 0 && part.lastname.length > 0 && part.role.length > 0){
        // Cast can now be deleted
        part.delete = true;
        castsLength--;
      }
    });

    // If all cast members have firstname, lastname and role entered, add an empty row
    if(castsLength === 0){
      _this.addRowCast();
    }

  }

  addRowCast() {
    let castUpdate = _this.state.casts;
    /* let castUpdateSort = castUpdate;
    castUpdateSort.sort(function(a, b){
      return a.id - b.id;
    }); */
    let newCast = {
      id: castUpdate[castUpdate.length-1].id+1, //might need to change that to get the right id??
      firstname: '',
      lastname: '',
      role: '',
      delete: false
    }
    castUpdate.push(newCast);
    _this.setState({casts: castUpdate});
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    const casts = this.state.casts;
    this.setState({
      casts: arrayMove(casts, oldIndex, newIndex),
    });
  };

  /* componentWillMount() {
    this.props.editorStore.setArticleSlug(this.props.match.params.slug);
  }

  componentDidMount() {
    this.props.editorStore.loadInitialData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      this.props.editorStore.setArticleSlug(this.props.match.params.slug);
      this.props.editorStore.loadInitialData();
    }
  }

  changeTitle = e => this.props.editorStore.setTitle(e.target.value);
  changeDescription = e => this.props.editorStore.setDescription(e.target.value);
  changeBody = e => this.props.editorStore.setBody(e.target.value);
  changeTagInput = e => this.setState({ tagInput: e.target.value });

  handleTagInputKeyDown = ev => {
    switch (ev.keyCode) {
      case 13: // Enter
      case 9: // Tab
      case 188: // ,
        if (ev.keyCode !== 9) ev.preventDefault();
        this.handleAddTag();
        break;
      default:
        break;
    }
  };

  handleAddTag = () => {
    if (this.state.tagInput) {
      this.props.editorStore.addTag(this.state.tagInput.trim());
      this.setState({ tagInput: '' });
    }
  };

  handleRemoveTag = tag => {
    if (this.props.editorStore.inProgress) return;
    this.props.editorStore.removeTag(tag);
  };

  submitForm = ev => {
    ev.preventDefault();
    const { editorStore } = this.props;
    editorStore.submit()
      .then(article => {
        editorStore.reset();
        this.props.history.replace(`/article/${article.slug}`)
      });
  }; */

  componentWillMount() {
    _this = this;
  }

  render() {
    const {
      inProgress,
      errors,
      title,
      description,
      body,
      tagList,
    } = this.props.editorStore;

    return (
      <div>
        <div class="showtix-section container">
          <div class="row">
            <div class="col-12 col-md-8">
              <h1>{this.props.title}</h1>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Event Type*</label>

                    <div class="showtix-form__select">
                      <select class="showtix-input">
                        <option>
                          Event
                        </option>

                        <option>
                          Donation
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Event name*</label>

                    <div class="showtix-form__input">
                      <input class="showtix-input js-phone-mask" type="text" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Event subtitle</label>

                    <div class="showtix-form__input">
                      <input class="showtix-input" type="text" />
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Short name</label>

                    <div class="showtix-form__input">
                      <input class="showtix-input" type="text" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Description</label>

                    <div class="showtix-form__input">
                      <textarea class="showtix-input" rows="5">
      </textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Contact Email *</label>

                    <div class="showtix-form__input">
                      <input class="showtix-input js-email-mask" type="text" />
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Contact Phone *</label>

                    <div class="showtix-form__input">
                      <input class="showtix-input js-phone-mask" type="text" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Website</label>

                    <div class="showtix-form__input">
                      <input class="showtix-input" type="text" />
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Limit of tickets per client</label>

                    <div class="showtix-form__select">
                      <select class="showtix-input">
                        
                        
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Service Fee</label>

                    <div class="row">
                      <div class="col-12">
                        <div class="showtix-form__radio">
                          <input type="radio" class="showtix-input" id="fee-1" name="fee" />
                          <label class="showtix-label" for="fee-1">Client - Paid by you</label>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="showtix-form__radio">
                          <input type="radio" class="showtix-input" id="fee-2" name="fee" />
                          <label class="showtix-label" for="fee-2">Customer - Paid by your
                          patrons</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">MTI Show</label>

                    <div class="row">
                      <div class="col-12">
                        <div class="showtix-form__radio">
                          <input type="radio" class="showtix-input" id="mti-1" name="mti" />
                          <label class="showtix-label" for="mti-1">Yes, the show above is
                          licensed by Music Theatre International (MTI). Discounted ShowTix4U
                          fee will be assigned to your account. (Please note all information
                          will be verified).</label>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="showtix-form__radio">
                          <input type="radio" class="showtix-input" id="mti-2" name="mti" />
                          <label class="showtix-label" for="mti-2">No, The above show in not
                          licensed by Music Theatre International</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Poster Graphic <i class="showtix-tooltip"
                    data-tooltip=
                    "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                    !</i></label>

                    <div class="showtix-form__drop">
                      <Dropzone class="showtix-dropzone" onDrop={this.onDrop.bind(this)} accept="image/*" maxSize={256}>
                        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                          if (isDragActive) {
                            return "This file is authorized";
                          }
                          if (isDragReject) {
                            return "This file is not authorized";
                          }
                          return acceptedFiles.length || rejectedFiles.length
                            ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
                            : "Drag and drop or click to upload an image";
                        }}
                        </Dropzone>
                      <h2>Dropped files</h2>
                      <ul>
                        {
                          this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Advertisement Graphic <i class=
                    "showtix-tooltip" data-tooltip=
                    "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                    !</i></label>

                    <div class="showtix-form__drop">
                      DROPZONE
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="showtix-form__group">
                    <label class="showtix-label">Cast <i class="showtix-tooltip" data-tooltip=
                    "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                    !</i></label>

                    <div class="table-responsive">
                      <table class="showtix-table" width="100%">
                        <thead>
                          <tr>
                            <th></th>

                            <th>First name</th>

                            <th>Last name</th>

                            <th>Role</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <SortableList items={this.state.casts} onSortEnd={this.onSortEnd} useDragHandle={true} />
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4">
              HELP
            </div>
          </div>
        </div>

        <div class="showtix-section showtix-background__primary-1">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1>Venue</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="showtix-form__group">
                  <div class="row">
                    <div class="col-12">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="venue-1" name="venue" />
                        <label class="showtix-label" for="venue-1">Use an existing
                        venue</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-sm-4">
                      <div class="showtix-form__select">
                        <select class="showtix-input">
                          
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="showtix-form__group">
                  <div class="row">
                    <div class="col-12">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="venue-2" name="venue" />
                        <label class="showtix-label" for="venue-2">Create a new Reserved
                        Seating venue</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="venue-3" name="venue" />
                        <label class="showtix-label" for="venue-3">Create a new General
                        Admission venue</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Name*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Address*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue City*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue State*</label>

                  <div class="showtix-form__select">
                    <select class="showtix-input">
                      <option value="">
                        United States
                      </option>

                      <option value="AK">
                        AK
                      </option>

                      <option value="AL">
                        AL
                      </option>

                      <option value="AR">
                        AR
                      </option>

                      <option value="AZ">
                        AZ
                      </option>

                      <option value="CA">
                        CA
                      </option>

                      <option value="CO">
                        CO
                      </option>

                      <option value="CT">
                        CT
                      </option>

                      <option value="DC">
                        DC
                      </option>

                      <option value="DE">
                        DE
                      </option>

                      <option value="FL">
                        FL
                      </option>

                      <option value="GA">
                        GA
                      </option>

                      <option value="HI">
                        HI
                      </option>

                      <option value="IA">
                        IA
                      </option>

                      <option value="ID">
                        ID
                      </option>

                      <option value="IL">
                        IL
                      </option>

                      <option value="IN">
                        IN
                      </option>

                      <option value="KS">
                        KS
                      </option>

                      <option value="KY">
                        KY
                      </option>

                      <option value="LA">
                        LA
                      </option>

                      <option value="MA">
                        MA
                      </option>

                      <option value="MD">
                        MD
                      </option>

                      <option value="ME">
                        ME
                      </option>

                      <option value="MI">
                        MI
                      </option>

                      <option value="MN">
                        MN
                      </option>

                      <option value="MO">
                        MO
                      </option>

                      <option value="MS">
                        MS
                      </option>

                      <option value="MT">
                        MT
                      </option>

                      <option value="NC">
                        NC
                      </option>

                      <option value="ND">
                        ND
                      </option>

                      <option value="NE">
                        NE
                      </option>

                      <option value="NH">
                        NH
                      </option>

                      <option value="NJ">
                        NJ
                      </option>

                      <option value="NM">
                        NM
                      </option>

                      <option value="NV">
                        NV
                      </option>

                      <option value="NY">
                        NY
                      </option>

                      <option value="OH">
                        OH
                      </option>

                      <option value="OK">
                        OK
                      </option>

                      <option value="OR">
                        OR
                      </option>

                      <option value="PA">
                        PA
                      </option>

                      <option value="RI">
                        RI
                      </option>

                      <option value="SC">
                        SC
                      </option>

                      <option value="SD">
                        SD
                      </option>

                      <option value="TN">
                        TN
                      </option>

                      <option value="TX">
                        TX
                      </option>

                      <option value="UT">
                        UT
                      </option>

                      <option value="VA">
                        VA
                      </option>

                      <option value="VT">
                        VT
                      </option>

                      <option value="WA">
                        WA
                      </option>

                      <option value="WI">
                        WI
                      </option>

                      <option value="WV">
                        WV
                      </option>

                      <option value="WY">
                        WY
                      </option>

                      <option value="AA">
                        AA
                      </option>

                      <option value="AE">
                        AE
                      </option>

                      <option value="AP">
                        AP
                      </option>

                      <option value="AS">
                        AS
                      </option>

                      <option value="FM">
                        FM
                      </option>

                      <option value="GU">
                        GU
                      </option>

                      <option value="MH">
                        MH
                      </option>

                      <option value="MP">
                        MP
                      </option>

                      <option value="PR">
                        PR
                      </option>

                      <option value="PW">
                        PW
                      </option>

                      <option value="VI">
                        VI
                      </option>

                      <option value="">
                        Canada
                      </option>

                      <option value="AB">
                        AB
                      </option>

                      <option value="BC">
                        BC
                      </option>

                      <option value="MB">
                        MB
                      </option>

                      <option value="NB">
                        NB
                      </option>

                      <option value="NL">
                        NL
                      </option>

                      <option value="NT">
                        NT
                      </option>

                      <option value="NS">
                        NS
                      </option>

                      <option value="NU">
                        NU
                      </option>

                      <option value="ON">
                        ON
                      </option>

                      <option value="PE">
                        PE
                      </option>

                      <option value="QC">
                        QC
                      </option>

                      <option value="SK">
                        SK
                      </option>

                      <option value="YT">
                        YT
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Zip*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input js-zip-mask" type="text" />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Phone *</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input js-phone-mask" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Fax</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input js-phone-mask" type="text" />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Timezone*</label>

                  <div class="showtix-form__select">
                    <select class="showtix-input">
                      <option value="AST">
                        Atlantic Standard Time
                      </option>

                      <option value="EST">
                        Eastern Standard Time
                      </option>

                      <option value="CST">
                        Central Standard Time
                      </option>

                      <option value="MST">
                        Mountain Standard Time
                      </option>

                      <option value="PST">
                        Pacific Standard Time
                      </option>

                      <option value="AKST">
                        Alaska Standard Time
                      </option>

                      <option value="HAST">
                        Hawaii-Aleutian Standard Time
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Venue Seating Chart <i class="showtix-tooltip"
                  data-tooltip=
                  "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                  !</i></label>

                  <div class="showtix-form__drop">
                    DROPZONE
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-4">
                <div class="showtix-form__group">
                  <label class="showtix-label">Quantity of tickets*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="showtix-section showtix-background__primary-2">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-8">
                <h1>Pricing</h1>

                <div class="row">
                  <div class="col-12">
                    <div class="showtix-form__group">
                      <div class="table-responsive">
                        <table class="showtix-table" width="100%">
                          <thead>
                            <tr>
                              <th></th>

                              <th>Ticket name</th>

                              <th class="text-right">Price</th>

                              <th></th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.prices.map(function(item){
                              return (
                                <tr key={item} id={item}>
                                  <td>move</td>

                                  <td>
                                    <div className="showtix-form__input">
                                      <input className="showtix-input" ef={'name'+item} type="text" defaultValue={item} />
                                    </div>
                                  </td>

                                  <td>
                                    <div className="showtix-form__input showtix-form__money">
                                      <input className="showtix-input" type="text" value="" />
                                    </div>
                                  </td>
                                  <td>Delete</td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                HELP
              </div>
            </div>
          </div>
        </div>

        <div class="showtix-section showtix-background__primary-3">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-8">
                <h1>Dates</h1>

                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">When is your show?</label>

                      <div class="showtix-form__input">
                        <input class="showtix-input" type="text" />
                      </div>

                      <div class="showtix-note">
                        You can select multiple dates.
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">At what time?</label>

                      <div class="showtix-form__select">
                        <select class="showtix-input">
                          <option>
                            Choose
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4"></div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">Presale start</label>

                      <div class="showtix-form__multiple">
                        <div class="showtix-form__input">
                          <input class="showtix-input" type="text" />
                        </div>

                        <div class="showtix-form__select">
                          <select class="showtix-input">
                            <option>
                              Choose
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">Presale end</label>

                      <div class="showtix-form__multiple">
                        <div class="showtix-form__input">
                          <input class="showtix-input" type="text" />
                        </div>

                        <div class="showtix-form__select">
                          <select class="showtix-input">
                            <option>
                              Choose
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">Presale password</label>

                      <div class="showtix-form__input">
                        <input class="showtix-input" type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">Public sale start</label>

                      <div class="showtix-form__multiple">
                        <div class="showtix-form__input">
                          <input class="showtix-input" type="text" />
                        </div>

                        <div class="showtix-form__select">
                          <select class="showtix-input">
                            <option>
                              Choose
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">Public sale end</label>

                      <div class="showtix-form__select">
                        <select class="showtix-input">
                          <option>
                            2 hours before
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4"></div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="showtix-form__group">
                      <label class="showtix-label">Boxoffice sale end</label>

                      <div class="showtix-form__select">
                        <select class="showtix-input">
                          <option>
                            2 hours after
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4"></div>

                  <div class="col-12 col-md-4"></div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="showtix-form__group">
                      
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="showtix-form__group">
                      <button class="showtix-button showtix-background__primary-4"><span>CREATE
                      EVENTS</span></button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                HELP
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-event">
                  <div class=
                  "showtix-event__header js-toggle-active js-toggle-active-content-1"
                  data-target=".js-toggle-active-content-1, .js-toggle-content-1">
                    Friday, Febuary 2, 2018 <a class="showtix-action showtix-action__copy"
                    href="#"></a> <a class="showtix-action showtix-action__delete" href=
                    "#"></a>
                  </div>

                  <div class="showtix-event__body js-toggle-content-1">
                    <div class="padder">
                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Event date and time*</label>

                            <div class="showtix-form__multiple">
                              <div class="showtix-form__input">
                                <input class="showtix-input" type="text" />
                              </div>

                              <div class="showtix-form__select">
                                <select class="showtix-input">
                                  <option>
                                    7:00PM
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Presale start</label>

                            <div class="showtix-form__multiple">
                              <div class="showtix-form__input">
                                <input class="showtix-input" type="text" />
                              </div>

                              <div class="showtix-form__select">
                                <select class="showtix-input">
                                  <option>
                                    7:00PM
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Presale end</label>

                            <div class="showtix-form__multiple">
                              <div class="showtix-form__input">
                                <input class="showtix-input" type="text" />
                              </div>

                              <div class="showtix-form__select">
                                <select class="showtix-input">
                                  <option>
                                    7:00PM
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Presale password</label>

                            <div class="showtix-form__input">
                              <input class="showtix-input" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Public sale start</label>

                            <div class="showtix-form__multiple">
                              <div class="showtix-form__input">
                                <input class="showtix-input" type="text" />
                              </div>

                              <div class="showtix-form__select">
                                <select class="showtix-input">
                                  <option>
                                    7:00PM
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Public sale end</label>

                            <div class="showtix-form__select">
                              <select class="showtix-input">
                                <option>
                                  2 hours before
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="showtix-form__group">
                            <label class="showtix-label">Box office sale end</label>

                            <div class="showtix-form__select">
                              <select class="showtix-input">
                                <option>
                                  2 hours after
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-md-6">
                          <button class=
                          "showtix-button showtix-background__primary-1"><span>Assign
                          tickets</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                Event 2
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
