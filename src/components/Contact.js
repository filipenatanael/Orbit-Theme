import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const Icons = {
  'email': 'fas fa-envelope',
  'phone': 'fas fa-phone',
  'website': 'fas fa-globe',
  'linkedin': 'fab fa-linkedin-in',
  'github': 'fab fa-github',
  'twitter': 'fab fa-twitter'
};

const Contact = ( props ) => (
  <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        {
          _.map(props.contact, c => {
            let icon = Icons[c.type];
            return (
              <li key={c.type} className={c.type}><i className={icon}></i>
               <a href={c.url} target={c.target === true ? '_blank' : ''}>{c.content}</a></li>
              );
          })
        }
      </ul>
  </div>
);

const mapStateToProps = (state) => ({
  contact: state.profile.general.contact
});

export default connect(mapStateToProps)(Contact);
