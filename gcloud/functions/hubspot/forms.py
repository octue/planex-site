from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, validators


class ContactForm(FlaskForm):
    """A Contact Form for validating submissions

    A camelCase naming convention is applied to avoid the need for
    converting keys javascript-side

    """
    firstName = StringField('First Name', [validators.DataRequired(), validators.Length(min=1, max=200)])
    lastName = StringField('Last Name', [validators.DataRequired(), validators.Length(min=1, max=200)])
    email = StringField('Email Address', [validators.DataRequired(), validators.Email()])
    message = TextAreaField('Message', [validators.DataRequired(), validators.Length(min=1, max=1000)])


class SubscribeForm(FlaskForm):
    """An email subscription form
    """
    email = StringField('Email Address', [validators.DataRequired(), validators.Email()])
