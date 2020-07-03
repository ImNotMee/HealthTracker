# team27
## The landing page of the app is also where users can sign up an account (regular user) and sign in access for both admin and user.

### Our app consists of a 5 main features for a regular user:
  1. They are able to log and see their physical, mental, and medical goals within the app. This is located in the overview page.
  2. They are able to see their progress of some of their goals in the trends page. By switching tabs of each type of tracking activity, the user will be able to see this current week’s progress.
  3. They can set up reminders for appointments or complete a certain goal on this day.  And there will be alerts for these remainders while the user is on the app and it gets near the time of the remainder.
  4. They can view their appointments under a calendar view. The calendar will display the current month that it is getting used.
  5. They are able to check in to a location, where the user is planning to go, to see if there are a lot of people there. It is to notify the users that an area might be too crowded to practice social distancing.

### As an admin user:
  1. Under users, the admins can create, modify, or delete users.
  2. Under the trends page, admins can view the average data of all users on their progress within this week.
  3. Under the alert sys page, admins can not only check in to location, they are able to add new locations for users to check in with.
  4. Under the reminder page, admins can set up reminders for important tasks that they need to work on.
 
# Instructions for regular user:
## To login as a regular user:

Username: user <br>
Password: user <br>
To log out, click the logout button and it will redirect you back to the landing page.

## User Creation: 
This is located at the on the right side of the landing page (where you first start up the app). 

Enter “Bob” for first name, “Jones” for last name, “boundless” for email, “password” for password and select male for gender.<br>
-Click create account, and now you can sign in with this account. <br>
**Note**Please do not refresh the page, since these data are not stored in a database.

## Overview:
On the overview page, there are nine cards, each with a view that displays the corresponding data of the user. 
- To add new data for any nine metrics, click on the card and enter in the new data. <br>
- Each of the data entering views will have tips and tricks to help improve with the corresponding activity. <br>

### Body Mass Index:
Click on the Body Mass Index card, then input the appropriate weight and height in kilograms and meters respectively (positive numbers only). <br>
 Alternatively, you can click on the Standards tab to input the value as pounds and inches respectively. <br>
After inputting the data, click on save and the X button at the top right to return to the Overview view. 

### Water Consumption:
Click on the water consumption card, then input the amount of water in ml (positive numbers only).<br>
After inputting the data, click on save and the X button at the top right to return to the Overview view. 

### Calories:
Click on the calories card, then input the amount of calories (positive numbers only). <br>
After inputting the data, click on save and the X button at the top right to return to the Overview view. 

### Mood:
Click on the mood card, then select one of the moods using the radio button below them. <br>
After inputting the data, click on save and the X button at the top right to return to the Overview view. 
Try out all the different moods!

### Sleep:
Click on the sleep card, then input the hour of sleeps (positive numbers only). <br>
After inputting the data, click on save and the X button at the top right to return to the Overview view.

### Stress:
Click on the stress card, then use the slider to input the desired stress level. <br>
After inputting the data, click on save and the X button at the top right to return to the Overview view. 
Try out all the different input values!

### Medication:
Click on the medication card, it will bring you to the reminders page. From there, click add reminder on the bottom right. <br>
From there, select the medical health category and medications subcategory. Then input the title for the event or the name of the medication in the Titles section. <br>
Input the desired date and time for the medication reminder to occur.  <br>
Afterwards, the user can input the dosage and side-effects and other relevant information in the notes section.

### Sickness:
Click on the sickness card, from the dropdown list, select a symptom, then click on the + button next to it. <br>
You can add multiple different symptoms by selecting another symptom from the dropdown list and click on the + button to add it to the list. <br>
To remove a symptom, click on the X button next to the symptom to remove it from the list.<br>
After inputting the data, click on save and the X button at the top right to return to the Overview view. <br>
Try out all the different symptoms and different combinations! 

### Appointments:
Click on the appointments card, it will bring you to the reminders page. From there, click add reminder on the bottom right. <br>
From there, select the medical health category (or any other ones) and Appointments subcategory. <br>
Then input the title for the event or the name of the doctor in the Titles section. <br>
Input the desired date and time for the appointment. <br>
Afterwards, the user can input the location and other relevant information in the notes section.

## Trends:
To access the trends page, use the side bar and select Trends.
(These data are all hard coded and will require database call) 
- Click the Weight tab at the top of the page, it will render a line graph displaying the current week of the user's weight. 
- Click  the Sleep tab at the top of the page, it will render a bar graph displaying the current week of the user’s hours of sleep.
- Click the Stress tab at the top of the page, it will render a bar graph displaying the current week of the user’s stress level.
- Click the Calories tab at the top of the page, it will render a line graph displaying the current week of the user’s calories count.

## Calendar:
To access the calendar page, use the side bar and select Calendar.
- Click the Calendar tab at the top of the page to see all the appointments that the user has within this month.
- Click the Streak  tab at the top of the page to see all the streaks of their goals (physical, mental, medical) that the user has within this month.
(Data is hard coded, will require server call)

## Reminders:

![img](https://lh3.googleusercontent.com/c1UHpUCc2n8CZ-AlKpLxUazpUuBKzeoKYFQ-V4FBZ5bMvVbP9OvrgxbrsuRiS-AgR0EdOg33p76mDrL2KgvgQekeIA7rA_827oIC_7IOYGdcFX5_TwSD_KzOKpMKIBUuVQ)



### Adding a reminder ![img](https://lh4.googleusercontent.com/tFDSvz-sbC8VzaAOaLtck5mKs-vgC5SGLGNhcn8gjcdXCTarUfji2TT4IvWdJiaVhvKL9YibsNxPTXd6_m-H46d_YBPeNDrG0qkn8PZOXRjdh0P0iKPy9M84o93OITlWSA)

1. To add a reminder for specific health related tracking activity, the user can go to the reminders page, using the side navigation bar, and click the pink ‘add reminder button’ at the bottom right connor. 
2. Users can select any categories, and its subcategories (when it appears), add a title, but for the “When to remind” section, please enter a valid date with the format of YYYY-MM-DDTHH:MM:(AM/PM). Example: 2021-06-08:15:35:AM. You can optionally add a note that’s less than 225 characters
3. Pleaase create more than one reminder with a small note of less than 20 chars 
4. Click the add button on the bottom left
   - Once the remainder is added, the new remainder will show up on the remainders page. If it is an appointment, it will also show up on the calendar page if it is within this current month.

**Note:** While the reminder is active or yet to be triggered this status of the reminder will be indcate by the hour glass icon  ![img](https://lh5.googleusercontent.com/TNHXhjfju9sdNfCmP7AlAQZXXRyeBuwiq0S0V7xrnWzo4rbQieN-6iLRGau_pcja6sxuokAxqwtHNSqWdmmvoDX2qF12U63yBHZDWMqqWPJ4VABbca-iKLz8KnfDdg7utQ) on the left of the reminder item



### Edit Reminder ![img](https://lh3.googleusercontent.com/uxfvrpCRMkerXt79Tki5RJXN6S9XSrbMH6Q17UI1rQZJTt9iFVEFBe_Cac9e2AjRxAX1rZXRiXnK1u9kp_VyAQ2bh2UhBJEcOGt63TSn_9XYWL8EX7_5xzRsHLr4j5jNNA)

1. You can also edit a reminder by clicking the edit icon ![img](https://lh6.googleusercontent.com/gRNuWXtFmZ1tf7Sr9u3_cwKcza2Ao4UJ_R6AcHySyp51nLCm2l3GQmUBYriof0joKUYW8tfyan4L7FzYLcjBdICDsIiVXjTehL3ibq0g8Pk51zBpVOnbunRr_z9Wdrlaag)and  the infromation of that reminder will be populated into a edit reminder form similar to when adding a reminder. 
   - For example set the reminder times of the reminders you made to 2-5 mins from your current time 



### Reminder Alerts ![img](https://lh3.googleusercontent.com/k0_xkG3b9TKx7K0huJaVwhuoYf2uxnonuC6PixxjpGjuZkVFAM9iT22GuPBYxWfw79E0sLCWHlJYWwbH3T67f5dZh43BWmQiEKnBIzGG6bKMOPUGfZKrJnQpuyQ_-lMvAA)



1. After editting your reminder time to be within 2-5 mins of the current time. If you move to anohter view, logout and log back in or stay on the same view you will see a notification banner at the top of the view along with a notification badge on the reminder button on the side menu bar with the number of notifications recived. 
2. You can dismiss the notification but clicking the ![image-20200703190540311](/Users/cd/Library/Application Support/typora-user-images/image-20200703190540311.png) on the right of the notification banner. This will remove the banner and the badge



### Complete reminder  ![img](https://lh4.googleusercontent.com/wSL2J5TS9WzByNODmrX6-g5iwMjZUL0eyfp5rgxWzUUdrtlRfTg7rGAC3ja2ebvb1NG6xhMBSgPjuVVOULbl7Axrb5V10Ork2Q5-5PRCCD_fvO17Nz1t-DvMxAvrghwgvg)

1. Once a reminder has been triggered and a notification is sent, the status of the reminder will be changed to "overdue" and this is indication by the change of the status icon to an ![img](https://lh6.googleusercontent.com/mFvlbfLGwONulKKGoxfkg9IgiFI9B13RZkEMAiRAysLK6uZdi8Q57bqLUBm5MQOpE-YDRv_-C7Hd602FZOVEN9vgVILahKAXwkeknQf653XX8GijpFDI1m6VEkwn9MchFg)
2. Then after you have compeleted the reminder you can change the status to complete by clicking the ![img](https://lh4.googleusercontent.com/fNfOy-ksDDtujdPxdanXyccaqNnvS41BmuPMf2aIGz_J81TTJilJmxiFG8ooII408RBSe7UD0_n-SfGMccaIDIc9hJJJjgczzTklTSE8UTu4Xs7CnS86fWVjrVB3wYzb2w) on the right side of the reminder item

   - This will change the reminder icon status to complete indicated by ![img](https://lh4.googleusercontent.com/Z4_QQDkRVFChCU4w1mvGTKgiaQ8O34f4vsfxX5Up-JfvfchIYYXj4WM0y5Z6CQJ0QzMmHOrHV-LVxszWqWNinPuw9ZI-WiNbLRghIn5qnsSxXeEu0pz5wKhDIu_jaD4Q9Q)

     

### Delete Reminder ![img](https://lh5.googleusercontent.com/yeoYJ82pe5M0zhxGFT80bNHLPNQo2dsX7th-HO32WHGd9CBSzfoB_1eCH0vXJyUzlS4fmwNZNMjQYqpjfmSg-sxiqciiwN03W0eQMAlnt_lHDvvboa_dfVmpYyC2Q4xLZw)

1. If you no longer need the reminder you can remove the reminder(s) you created by clicking the delete (trash can ![img](https://lh5.googleusercontent.com/yeoYJ82pe5M0zhxGFT80bNHLPNQo2dsX7th-HO32WHGd9CBSzfoB_1eCH0vXJyUzlS4fmwNZNMjQYqpjfmSg-sxiqciiwN03W0eQMAlnt_lHDvvboa_dfVmpYyC2Q4xLZw) icon on the right of a reminder item.
2. 

## Check in:
To access the check in page, use the side bar and select Check-in. <br>
Then under the drop-down menu, select the location that the use wants to check in, in our case, Queen’s Park. <br>

Click “view place” and the details of the location will be displayed. 

Then click check-in to indicate that the user will be going to this location and the occupancy limit will increase by 1.<br>

# Instructions for admin:
To login as an admin: 

Username: admin

Password: admin

To log out, click the logout button and it will redirect you back to the landing page.

## User: 
Click on Users tab on the side bar upon login, and to see all the users.

Click on the view profile button to see the details of the user, and click the back button to exit the viewing page.

(Note: doing either of this will remove this user from the UI, require refreshing the page and a relog to do the other feature)

Click on the assign admin button to make this user an admin.

Click on the remove button to remove the user.

## Trends:
To access the trends page, use the side bar and select Trends.(Very similar to user trends page)

(These data are all hard coded and will require database call) 
- Click the Weight tab at the top of the page, it will render a line graph displaying the current week of the average weight of all users. 
- Click  the Sleep tab at the top of the page, it will render a bar graph displaying the current week of the average hours of sleep for all users.
- Click the Stress tab at the top of the page, it will render a bar graph displaying the current week of the average stress level for all users.
- Click the Calories tab at the top of the page, it will render a line graph displaying the current week of the average calorie intake for all users.

## Reminders:
Works exactly the same as a regular user’s reminder but only when adding and editing a reminder, the category options will change.

Create a new reminder, click on add reminder button on the button right, then select “Tasks” for categories, “Marking for Phase 1” as the title, and enter a valid date, “2020-07-25:10:00:PM”, with the format of YYYY-MM-DDTHH:MM:(AM/PM). Enter “Hope all the projects are nice” for notes (could leave it blank if you wish).

Editing an existing reminder will be the same as creating a new one. But you click on the edit icon on the reminder you would like to edit.

## Check in:
Same as regular users check in pages when trying to check in.

Click on the add location button, to add a location for users to check-in on. 
 
Please enter these, Location name: “UTSG”, Address: “27 King's College Cir, Toronto”, Image URL: “https://thevarsity.ca/wp-content/uploads/2019/01/KCC-Victoria-Dawson.jpg”, Max Occupancy: “500” and for Description: “Campus” (could leave it blank).

Click the Add button to finish, and this new location will display on the selection menu for check in.


















## Getting Started

### First Time Setup
- Download node.js and npm [here](https://nodejs.org/en/download/) (node.js and npm come together in this download)
  - Mac node/npm download guide [here](https://treehouse.github.io/installation-guides/mac/node-mac.html)
  - We're using node version `12.18.0`
- Clone git repo `cd ~/Desktop; git clone https://github.com/csc309-summer-2020/team27.git`
- To install web app dependences run: `npm install` (make sure you're in the repo dir when you run this cmd)

#### Optional
- Installing yarn run: `curl -o- -L https://yarnpkg.com/install.sh | bash`
  - Other ways for installing yarn [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- For a guide on using npm click [here](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

### Start Web App
- To start web app in browser run: `npm start` (make sure you're in the repo dir when you run this cmd)
  - Make sure you've installed all app dependencies with `npm install`

## Working On App

### Working On A Page
- Put reusable components of that page into a folder with that page's name (e.g. `MyComponent`) in the `components` dir
- Inside `MyComponent` dir make a `index.jxs` file (we use `.jsx` to make commenting easier)
  - If applicable, you can add a `sytles.css` to put all your component's sytling in
  - If applicable, you can add a `action.js` file to the `actoins` dir
    - this file is where you can put state or other business logic for your component. This is recommneded to us by the prof, to make phase 2 easier

### CSS Styling
- See `App.css` for general css classes that can be reused
- Use css variable to unify app styling by using `property: var(--some-var-name);`
- Ensure CSS class names follow the [BEM methodology](http://getbem.com/naming/).

### Using Git Issues
- Create issues (github verion of 'stories' for small tasks that need to be completed
  - Tag issuess with piority level
  - Tag issues with an 'epic' following this format `Epic: Name of Epic`
- Create 'milestone' for major sections involing the completion of multiple epics

### Pull Requests
- Make them small! Less than 150 lines!
- Make sure the app builds!

### Project Tree
```
team27
├── README.md
├── YARN_README.md
├── node_modules
├── package.json
├── yark.lock
├── .gitignore
├── public
│   ├── index.html
│   └── ...
├── package.json
├── tests
│   └── ...
└── src
    ├── actions
    │   └── login.js
    ├── components
    │   ├── LandingPage
    │   │   ├── Login
    │   │   ├── index.js
    │   │   └── styles.css
    │   └── ...
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── setupTests.js
    ├── setupTests.js
    └── serviceWorker.js
```
