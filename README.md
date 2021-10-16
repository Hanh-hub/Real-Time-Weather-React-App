FYI - this app is depracated due to the BreezoMeter API requiring a monthly $ubscription. The demo video is all I have to show at this time.
AQI Web App
Special Thanks
This project was created with the help of L1lith who also created the state management library, jabr. I would highly recommend jabr for your next project if you've been using redux but feel it is overkill. The jabr central state management tool is incredibly powerful in its simplicity, which makes 99% of the boilerplate code in redux unnecessary.

How to Use
This app accepts user input which can be very general or very specific. When you enter a broad area (aka, "UT") it will return less accurate data, because the latitude and longitute that are served to the Air Quality Index API is likely further from your actual location. To get the most accurate results, use a city and state, or even better, a full address.

Dependencies
jabr
auto-bind
APIs Used:
BreezoMeter
Google Maps GeoCoding
Demo video
