from flask import Flask, render_template, jsonify, redirect, request, json
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
import email, smtplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/contact', methods = ["POST"])
def contact():
    try:
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        content = request.form['message']
        #send files to email address 
        port = 465
        password = "fullstack@145"
        smtp_server = "smtp.gmail.com"
        sender_email = "comptetestijawa@gmail.com"  
        receiver_email = "sojipquantin@gmail.com"
        message = MIMEMultipart()
        message["Subject"] = "New Message From ijawatech.com"
        message["From"] = sender_email
        message["To"] = receiver_email
        text = """\
            New message from ijatech.com : 
            Name : """ + name + """
            phone : """ + phone + """
            email : """ + email  + """
            message : """ + content + """
            """
        # Turn these into plain/html MIMEText objects
        part1 = MIMEText(text, "plain")

        # Add HTML/plain-text parts to MIMEMultipart message
        # The email client will try to render the last part first
        message.attach(part1)
        
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())    
        return jsonify(True)
    except:
        return jsonify(False) 