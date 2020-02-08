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
        #send files to email address for test only
        port = 465
        password = "fullstack@145"
        smtp_server = "smtp.gmail.com"
        sender_email = "comptetestijawa@gmail.com"  
        receiver_email = "sojipquantin@gmail.com"
        message = """\
        Subject: New Contact From www.ijawatech.com

        This message is sent from www.ijawatech.com.
        
        Name = """ + name + """
        phone = """ + phone + """
        email = """ + email + """
        message = """ + content + """
        """  
       
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)
        return jsonify(True)
    except:
        return jsonify(False) 
