import React from 'react';
import { Button, Label, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import Sidebar from '../shared/Sidebar';

export default function HomePage(props) {
  const { latestAlbum } = props;
  return (
    <div className="row justify-content-center">
      <div className="col-10 col-sm-7 col-md-5 col-lg-4">
        <h1>Welcome to SoundShare!</h1>
                <p>
                  SoundShare lets you save your favourite albums and artists to you own public profile from the Discogs database.
                </p>
                <Button id="signUpButton" color="primary" size="lg" tag={Link} to="/account/register">Sign Up</Button>
      </div>
    </div>
  );
}
