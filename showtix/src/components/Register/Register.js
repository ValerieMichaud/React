import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
//import TextareaCount from './TextareaCount/TextareaCount';
import './Register.css';

let _this;
let strings = new LocalizedStrings({en,fr});

const LinkWithTooltip = ({ id, children, href, tooltip }) => (
  <OverlayTrigger
    overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
    placement="top"
    delayShow={300}
    delayHide={150}
  >
    <a className="showtix-tooltip" href={href}>{children}</a>
  </OverlayTrigger>
);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        business: {
          name: '',
          email: '',
          phone: '',
          contact: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: ''
        },
        admin: {
          username: '',
          password: '',
          firstname: '',
          lastname: '',
          email: '',
          token: '',
          id: ''
        },
        options: {
          referred: '',
          donation: false,
          donationMessage: '',
          donationEmail: '',
          captureAddress: false,
          willcall: false,
          refund: false,
          exchange: false
        }
      },
    };
  }

  facebookCallback(response) {
    console.log(response);
    let nameArray = response.name.split(' ');
    let register = {
      admin: {
        email: response.email,
        username: nameArray[0]+nameArray[1],
        firstname: nameArray[0],
        lastname: nameArray[1],
        token: response.accessToken,
        id: response.id
      }
    }
    _this.setState({
      register: register,
    });
  }

  googleCallback(response) {
    console.log(response);
    let register = {
      admin: {
        email: response.profileObj.email,
        username: response.profileObj.givenName + response.profileObj.familyName,
        firstname: response.profileObj.givenName,
        lastname: response.profileObj.familyName,
        token: response.accessToken,
        id: response.googleId
      }
    }
    _this.setState({
      register: register,
    });
  }

  handleChange(e) {
    let value = e.target.value;
    if(e.target.checked !== "undefined"){
      value = e.target.checked;
    }
    console.log(e.target);
    console.log(value);
    let object = e.target.attributes.getNamedItem('object').value;
    let property = e.target.name;
    let registerUpdate = this.state.register;
    registerUpdate[object][property] = value;
    this.setState({register: registerUpdate})
  }

  componentWillMount() {
    _this = this;
  }

  render() {
    return (
      <div>
        <div class="showtix-section container">
          <div class="row">
            <div class="col-12 text-center">
              <h1>{strings.title}</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">{strings.orgName}* 
                  <LinkWithTooltip tooltip={strings.orgNameTooltip} href="#" id="tooltip-1">
                    !
                  </LinkWithTooltip>
                </label>
                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" object="business" name="name" value={this.state.register.business.name} onChange={this.handleChange.bind(this)} />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">{strings.orgBillingAddress1}*
                  <LinkWithTooltip tooltip={strings.orgBillingAddress1Tooltip} href="#" id="tooltip-2">
                    !
                  </LinkWithTooltip>
                </label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" object="business" name="address1" value={this.state.register.business.address1} onChange={this.handleChange.bind(this)} />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label" for="business_email">{strings.orgEmail}* 
                  <LinkWithTooltip tooltip={strings.orgEmailTooltip} href="#" id="tooltip-3">
                    !
                  </LinkWithTooltip>
                </label>

                <div class="showtix-form__input">
                  <input
                    type="text"
                    className="showtix-input"
                    placeholder={strings.enterEmail}
                    id="business_email"
                    object="business" name="email" 
                    value={this.state.register.business.email} 
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">{strings.orgBillingAddress2}</label>

                <div class="showtix-form__input">
                  <input 
                    class="showtix-input" 
                    type="text" 
                    object="business" 
                    name="address2" 
                    value={this.state.register.business.address2} 
                    onChange={this.handleChange.bind(this)}
                    />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label" for="business_phone">{strings.orgPhone}* 
                  <LinkWithTooltip tooltip={strings.orgPhoneTooltip} href="#" id="tooltip-4">
                    !
                  </LinkWithTooltip>
                </label>

                <div class="showtix-form__input">
                  <input
                    type="text"
                    className="showtix-input"
                    placeholder="Enter a phone number"
                    id="business_phone"
                    object="business"
                    name="phone"
                    value={this.state.register.business.phone}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">{strings.billingCity}*</label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" object="business" name="city" value={this.state.register.business.city} onChange={this.handleChange.bind(this)} />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">{strings.billingContact}* 
                  <LinkWithTooltip tooltip={strings.billingContactTooltip} href="#" id="tooltip-5">
                    !
                  </LinkWithTooltip>
                </label>

                <div class="showtix-form__input">
                  <input class="showtix-input" type="text" object="business" name="contact" value={this.state.register.business.contact} onChange={this.handleChange.bind(this)} />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="showtix-form__group">
                <label class="showtix-label">Billing State/Province*</label>

                <div class="showtix-form__select">
                  <select class="showtix-input" object="business" name="state" value={this.state.register.business.state} onChange={this.handleChange.bind(this)}>
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
                <label class="showtix-label" for="business_zip">Billing Zip*</label>

                <div class="showtix-form__input">
                  <input
                    type="text"
                    className="showtix-input"
                    placeholder="Enter a zip code"
                    id="business_zip"
                    object="business"
                    name="zip"
                    value={this.state.register.business.zip}
                    onChange={this.handleChange.bind(this)}
                  />
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
                    <input class="showtix-input" type="text" object="admin" name="username" value={this.state.register.admin.username} onChange={this.handleChange.bind(this)} />
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
                    <input class="showtix-input" type="password" object="admin" name="password" value={this.state.register.admin.password} onChange={this.handleChange.bind(this)} />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">First Name*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" object="admin" name="firstname" value={this.state.register.admin.firstname} onChange={this.handleChange.bind(this)} />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Last Name*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" object="admin" name="lastname" value={this.state.register.admin.lastname} onChange={this.handleChange.bind(this)} />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Email*</label>

                  <div class="showtix-form__input">
                    <input class="showtix-input" type="text" object="admin" name="email" value={this.state.register.admin.email} onChange={this.handleChange.bind(this)} />
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
                    <input class="showtix-input" type="text" object="options" name="referred" value={this.state.register.options.referred} onChange={this.handleChange.bind(this)} />
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Accept Donation</label>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input 
                          type="radio"
                          class="showtix-input"
                          id="donation-1"
                          object="options"
                          name="donation"
                          checked={this.state.register.options.donation === true} 
                          onChange={this.handleChange.bind(this)}
                         />
                         <label class="showtix-label" for="donation-1">Yes</label>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="showtix-form__radio">
                        <input type="radio" class="showtix-input" id="donation-2"
                          object="options"
                          name="donation"
                          checked={this.state.register.options.donation === false} 
                          onChange={this.handleChange.bind(this)}
                          /> <label class="showtix-label" for="donation-2">No</label>
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

                  {/* <TextareaCount maxLength="250" /> */}

                  <div class="showtix-note">
                    Please limit to one sentence
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="showtix-form__group">
                  <label class="showtix-label">Text for Donation Receipt Email</label>

                  {/* <TextareaCount maxLength="250" /> */}
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
      </div>
    );
  }
}

export default Register;
