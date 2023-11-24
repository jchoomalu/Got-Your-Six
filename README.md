# Got Your Six
# Jason Hoomalu Thesis Project

## Installation – Client
To install client dependencies please type in terminal from the root directory please note there may be npm warning that can be ignored such as eslint or jest: 

```
cd ./client
npm i
```

## Installation – Server
When client has finished, to install server dependencies please type in terminal from the client (current) directory: 

```
cd ../server
npm i
```

## Installation – Seeding Database
To set up the database and install seeds ensure mongo is open and running on your system and type in the terminal from server (current) directory:

```
npm run seed
```

## Starting the App
Once your dependencies are installed start the application by running in the terminal from the server (current) directory this command will utilize concurrently to run the two start scripts simultaneously:

```
npm run app
```

## Up and Running
Navigate to: http://localhost:5000 (this may be done automatically if your system settings allow)

## Navigating Got Your Six

## Getting Started
* The home page is displayed first and the nav bar will give the user options to sign in or sign up. Most features will redirect you to sign in. The exceptions are the crisis page and resources pages.
* When signing in the user has the ability to upload a photo or an avatar of their choice.
* After signing up or signing in the nav bar will provide different options and also greet the user by name.

## Members 
The Members and Local links on the home page link to lists of Gy6 members, local sorts the users by state which I hope to upgrade to geolocation in the future. The All Members lists all Gy6 members in no particular order. You can view each members details by viewing their profile or send a specific user a direct message.

## Resources
The resources and transition pages offer links to various veterans services. All federal links are valid links and information, the private resources offer some valid links and placeholder info. These links are designed to put the user in contact with vital services offered to veterans.

## Crisis 
The CRISIS link is always available and sends the user to links for emergencies and crisis services.

## News and Events
News and Events are updated by the site administrator and users can read news and see events. Users can like or sign up for an event as well as view other members who have liked the same story, or are planning to attend the same event. Members can also comment on news stories.

## Stories
The stories section is designed to allow veterans to share their experiences with like minded individuals. Upon coming home many of us find that our stories are not appropriate for "the real world" and we hold them inside. I think this is one of the reasons they fester, and we feel alienated from the world. Stories can be browsed or published and the user has the option to publish their story anonymously. They also have the option to either allow or disallow comments. All stories can be liked by other members. This flexibility is designed to encourage members to share their experiences without fear or apprehension of what people may say or think. Journaling and blogging are often suggested by therapist and clinicians, this is a type of community blog that I think will be helpful to veterans struggling with mental health issues. Sample stories are a mixture of my own experiences and stories I have collected over the years. 

## Messaging 
Direct messaging is available bewteen all users. Both users have absolute control over messages meaning that when one user deletes a thread the entire thing is gone from both users accounts.

## Thesis Research Explanation - Security and Authentication
Got Your Six is dedicated to serving veterans in any and every way possible, including protecting any data shared with us. Unfortunately, due to the benefits available to veterans and service members, they are often the targets of cyber crime such as fraud and identity theft. That is why I decided to implement JSON Web Token, a popular form of client/server authentication into my project. Although there is really no way to offer the users of GY6 100% security, JWT adds a layer of validation that protects this precious data from malicious hackers.

JSON Web Token works by using access tokens that are passed between the client and server inside the headers. JSON Web Token is considered stateless because we track the sessions on the server and simply store the token on the client side. Upon receiving a request with valid credentials, in my case a users email address and password encrypted with Bcrypt, the server generates the access token and sends it to the client where it is stored in session storage. I chose session storage over local storage as it is abolished every time the window or tab is closed. The token is signed by a secret key that is stored in my server configuration files. When another request is made from the client, this time with the token stored and passed in the headers, the middleware functions in my auth controller are able to verify that this token was indeed created by my server and that the token has not yet expired or been altered in any way, it does so using the secret key. Once the verification middleware is complete I can safely (mostly) send that users information back to the client or perform other tasks that generally need to be secure such as accessing, editing, or deleting a verified members account information. This is vital to protect my sites users who are vulnerable to cyber crime.

JSON Web Token integrates well into my project because the users information is retrieved from the server for nearly every aspect of the sites functionality. Got Your Six is a social media / community building website that, by nature, may have personal and even medical information exposed to others if they decide to share these details with other members via the direct messaging features. I think that being able to feel secure while asking for help is not only important for protection against cyber crime, but may help users who are in need feel comfortable asking for the type of help that may be life saving in a crisis.

My main goal in building this site is to help end give veterans a way to reach out and help others who are in need. According to a 2021 census twenty two veterans commit suicide every day. This is unacceptable by any standard. I believe that veterans feeling isolated and alone, as well as the absurd amount of time it takes for the Veterans Administration to provide assistance to these veterans, are the two major causes of these tragic deaths. I think that a website like Got Your Six could fill some of the gaps providing relief in regards to these two major factors. Without some sort of security and authentication added to my site I feel that it could discourage veterans from feeling comfortable using these services, or, they could end up a victim of cyber crime and the benefits they earned could be delayed even further. 

If I were to send this to production I may also consider incorporating an encryption on the token itself and use a HTTPS server instead of HTTP. This would provide the maximum amount of security available to my users, who also happen to be my heroes.


## Whats New - Features
* Site now utilizes json web token for security and user validation
* Site now has a privacy option for users to hide their account
* Site now allows users to like individual comments in the news and story sections
* Site now allows users to update their profile including changing profile photo
* Site now has a progress bar for UI/UX while signing up
* Site now has classifieds section - (seeded California, Montana, and Alaska)
* UI/UX style changes to the crisis page 
* implemented some aria and assistive technology

## Whats New - Code and Bugs
* fixed spelling error on stories page
* fixed bug on homepage where the local link doesn't do a redirect like all the rest
* fixed infinite loop bug on Article pages now utilizes a toggle state boolean
* fixed bug on sign in where pressing enter would return you to main page
* fixed bug that sometimes loses navbar logo if user refreshes the page
* updated auth controller to modularize repetitive code on sign up and edit profile
* modularized resources into one model, collection and shared controller and router
* updated all instances of window reload to document load for better performance
* changed all syntax to the ES6 async and await 



## Enjoy
Browse the site and check out all the functionality! Mahalo!
-Jason Hoomalu – jason.hoomalu.3024523@tlm.cloud



