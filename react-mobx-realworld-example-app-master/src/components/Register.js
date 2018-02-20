import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { inject, observer } from 'mobx-react';

let _this;

@inject('authStore')
@observer
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  facebookCallback(response) {
    console.log(response);
    let nameArray = response.name.split(' ');
    let user = {
      email: response.email,
      username: nameArray[0]+nameArray[1],
      firstname: nameArray[0],
      lastname: nameArray[1],
      accesstoken: response.accessToken,
      id: response.id
    }
    _this.setState({
      user: user,
    });
  }

  googleCallback(response) {
    console.log(response);
    let user = {
      email: response.profileObj.email,
      username: response.profileObj.givenName + response.profileObj.familyName,
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      accesstoken: response.accessToken,
      id: response.googleId
    }
    _this.setState({
      user: user,
    });
  }

  componentWillMount() {
    _this = this;
  }

  componentWillUnmount() {
    this.props.authStore.reset();
  }

  handleUsernameChange = e => this.props.authStore.setUsername(e.target.value);
  handleEmailChange = e => this.props.authStore.setEmail(e.target.value);
  handlePasswordChange = e => this.props.authStore.setPassword(e.target.value);
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.authStore.register()
      .then(() => this.props.history.replace('/'));
  };

  render() {
    const { values, errors, inProgress } = this.props.authStore;

    return (
      <div>
        <div class="showtix-section container">
          <div class="row">
            <div class="col-12 text-center">
              <h1>Sign up as a Client</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Organization/Business Name* <i class=
                "showtix-tooltip" data-tooltip=
                "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                !</i></label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing Address 1* <i class="showtix-tooltip"
                data-tooltip=
                "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                !</i></label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Organization/Business Email* <i class=
                "showtix-tooltip" data-tooltip=
                "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                !</i></label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing Address 2</label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Organization/Business Phone* <i class=
                "showtix-tooltip" data-tooltip=
                "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                !</i></label>

                <div class="showtix-form__input">
                  <input class="showtix-input js-phone-mask" type="text" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing City*</label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing Contact* <i class="showtix-tooltip"
                data-tooltip=
                "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                !</i></label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing State/Province*</label>

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
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing Zip*</label>

                <div class="showtix-form__input">
                  <input class="showtix-input js-zip-mask" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="showtix-section showtix-background__primary-1">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h1>Administrator Information</h1>
                <p class="showtix-subtitle">Sign in using one of your account:</p>
                <FacebookLogin
                  appId="396988290714942"
                  autoLoad={false}
                  fields="name,email"
                  callback={_this.facebookCallback}
                />
                <GoogleLogin
                  clientId="511160110920-nfafnfkukblfl313aacj48n8ddmgmstr.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={_this.googleCallback}
                />
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-12 text-center">
                <p class="showtix-subtitle">Or create an account using your information:</p>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Username* <i class=
                  "showtix-tooltip" data-tooltip=
                  "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                  !</i></label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" value={this.state.user.username} />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Password* <i class=
                  "showtix-tooltip" data-tooltip=
                  "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                  !</i></label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="password" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">First Name*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" value={this.state.user.firstname} />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Last Name*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" value={this.state.user.lastname} />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Email*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input js-email-mask" type="text" value={this.state.user.email} />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6"></div>
            </div>
          </div>
        </div>

        <div class="showtix-section showtix-background__primary-2">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h1>Options</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Referred By <i class="showtix-tooltip"
                  data-tooltip=
                  "Name of your organization as it will appear for all events. i.e. - Shadowlake Ensemble">
                  !</i></label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Accept Donation</label>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="donation-1" name=
                        "donation" /> <label class="showtix-label" for="donation-1">Yes</label>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="donation-2" name=
                        "donation" /> <label class="showtix-label" for="donation-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">On-Screen Donation Message</label>

                  <div class="showtix-form__input">
                    <textarea class="showtix-input" rows="5">
      </textarea>
                  </div>

                  <div class="showtix-note">
                    Please limit to one sentence
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Text for Donation Receipt Email</label>

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
                  <label class="showtix-label">Capture Customer Address Information</label>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="capture-1" name=
                        "capture" /> <label class="showtix-label" for="capture-1">Yes</label>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="capture-2" name=
                        "capture" /> <label class="showtix-label" for="capture-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Do you allow will-call?</label>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="willcall-1" name="willcall" />
                        <label class="showtix-label" for="willcall-1">Yes</label>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="willcall-2" name="willcall" />
                        <label class="showtix-label" for="willcall-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Allow Call Center to perform Refunds</label>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="refund-1" name="refund" />
                        <label class="showtix-label" for="refund-1">Yes</label>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="refund-2" name="refund" />
                        <label class="showtix-label" for="refund-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Allow Call Center to perform Exchanges</label>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="exchange-1" name="exchange" />
                        <label class="showtix-label" for="exchange-1">Yes</label>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="exchange-2" name="exchange" />
                        <label class="showtix-label" for="exchange-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="showtix-section showtix-background__primary-3">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-2"></div>

              <div class="col-12 col-sm-8 text-center">
                <p>BECOMING A SHOWTIX4U CLIENT IS FREE OF CHARGE.<br />
                REMEMBER, YOU (OR YOUR CUSTOMERS) ARE ONLY CHARGED FEES FOR TICKETS SOLD.</p>

                <p>PLEASE READ THE <a href="">PRIVACY POLICY</a>, <a href="">USER AGREEMENT</a>
                AND <a href="">CLIENT AGREEMENT</a>.<br />
                YOU MUST AGREE TO THE TERMS AND CONDITIONS OF THESE DOCUMENTS BEFORE
                PROCEEDING.</p>

                <p>BY CLICKING THE "SIGN ME UP!" BUTTON, YOU ACCEPT THE TERMS AND CONDITIONS OF
                THESE AGREEMENTS AS OF THE DATE YOU BECOME A CLIENT OF SHOWTIX4U.<br />
                IF YOU DO NOT AGREE TO ALL OF THESE TERMS AND CONDITIONS, DO NOT BECOME A
                CLIENT.</p>
              </div>

              <div class="col-12 col-sm-2"></div>
            </div>

            <div class="row">
              <div class="col-12 text-center">
                <button class="showtix-button showtix-background__primary-1"><span>Sign me
                up!</span></button>
              </div>
            </div>
          </div>
        </div>

        <div classname="auth-page">
          <div classname="container page">
            <div classname="row">
              <div classname="col-md-6 offset-md-3 col-xs-12">
                <h1 classname="text-xs-center">Sign Up</h1>

                <p classname="text-xs-center">Have an account?</p>

                <form onsubmit="{this.handleSubmitForm}">
                  <fieldset>
                    <fieldset classname="form-group">
                      <input classname="form-control form-control-lg" type="text" placeholder=
                      "Username" value="{values.username}" onchange=
                      "{this.handleUsernameChange}" />
                    </fieldset>

                    <fieldset classname="form-group">
                      <input classname="form-control form-control-lg" type="email" placeholder=
                      "Email" value="{values.email}" onchange="{this.handleEmailChange}" />
                    </fieldset>

                    <fieldset classname="form-group">
                      <input classname="form-control form-control-lg" type="password"
                      placeholder="Password" value="{values.password}" onchange=
                      "{this.handlePasswordChange}" />
                    </fieldset><button classname="btn btn-lg btn-primary pull-xs-right" type=
                    "submit" disabled="{inprogress}">Sign in</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
