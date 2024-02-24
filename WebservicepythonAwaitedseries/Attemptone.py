import requests
import schedule
import time

def call_web_service():
    # Replace 'YOUR_WEBSERVICE_URL' with the actual URL of the web service
    url = 'YOUR_WEBSERVICE_URL'
    urltest = 'http://localhost:3000/api/sendText'

    # Replace 'YOUR_PAYLOAD' with the data you want to send in the POST request
    payloadtest = {
    "session": "default",
    "chatId": "918919678327@c.us",
    "text": "Testing using vstudio code"
}

    headers = {'Content-Type': 'application/json'}

    # Replace 'YOUR_PAYLOAD' with the data you want to send in the POST request
   # payload = {'key1': 'value1', 'key2': 'value2'}

    try:
        # Make the POST request
        response = requests.post(urltest, data=payloadtest)

        # Check if the request was successful (status code 200)
        if response.status_code == 201:
            print(f"Web service called successfully at {time.strftime('%Y-%m-%d %H:%M:%S')}")
        else:
            print(f"Failed to call web service. Status code: {response.status_code}")

    except Exception as e:
        print(f"An error occurred: {e}")

# Schedule the method to run every 5 minutes
schedule.every(2).minutes.do(call_web_service)

# Run the scheduled tasks
while True:
    schedule.run_pending()
    time.sleep(1)
