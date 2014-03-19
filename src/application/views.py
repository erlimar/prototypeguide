from flask import render_template, redirect, url_for

from application import app


@app.route('/')
def home():
    return redirect(url_for('editor'))


@app.route('/editor/')
def editor():
    return render_template('editor.html')
