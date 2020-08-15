# team27
## The landing page of the app is also where users can sign up an account (regular user) and sign in access for both admin and user.

### Our app consists of 5 main features for a regular user:
  1. They are able to log and see their physical, mental, and medical goals within the app. This is located in the overview page.
  2. They are able to see their progress of some of their goals in the trends page. By switching tabs of each type of tracking activity, the user will be able to see this current week’s progress.
  3. They can set up reminders for appointments or complete a certain goal on this day.  And there will be alerts for these remainders while the user is on the app and it gets near the time of the remainder.
  4. They can view their appointments under a calendar view. The calendar will display the current month that it is getting used.
  5. They are able to check in to a location, where the user is planning to go, to see if there are a lot of people there. It is to notify the users that an area might be too crowded to practice social distancing.

### As an admin user:
  1. Under users, the admins can create, modify, or delete users.
  2. Under the trends page, admins can view the average data of all users on their progress within this week.
  3. Under the alert sys page, admins can alert users who have recently visited a location that has had a new covid case. Also, they are able to add new locations for users to check in with, and edit information of existing locations or delete them
  4. Under the reminder page, admins can set up reminders for important tasks that they need to work on.
  
# After cloning the github repo and before starting the app

Make sure to run ```npm install``` for all the dependencies and the correct versions.

To start the app, run ```npm start```
 
# Instructions for regular user:

## To login as a regular user:

Username: user 

Password: user 

To log out, click the logout button and it will redirect you back to the landing page.

## User Creation: 

This is located at the on the right side of the landing page (where you first start up the app). 

![img](https://i.imgur.com/DSOHZA7.png)


Enter  	**“Bob"** for first name, **“Jones”** for last name, **“boundless”** for email, **“password”** for password and select **male**(or female) for gender.

Email must be in format of "example@example.com" and password must have at least 6 characters.

Click **create account**, and now you can sign in with this account.

**Please do not refresh the page, since these data are not stored in a database.**

## Overview:

On the overview page, there are nine cards, each with a view that displays the corresponding data of the user. 

To add new data for any nine metrics, click on the card and enter in the new data. 

Each of the data entering views will have tips and tricks to help improve with the corresponding activity. 

### Body Mass Index:

Click on the **Body Mass Index** card, then input the appropriate weight and height in kilograms and meters respectively **(positive numbers only)**.

Alternatively, you can click on the **Standards** tab to input the value as pounds and inches respectively.

After inputting the data, click on save and the **X button** at the top right to return to the Overview view. 

### Water Consumption:

Click on the **water consumption** card, then input the amount of water in ml **(positive numbers only)**.

After inputting the data, click on save and the **X button** at the top right to return to the Overview view. 

### Calories:

Click on the **calories** card, then input the amount of calories **(positive numbers only)**. 

After inputting the data, click on save and the **X button** at the top right to return to the Overview view. 

### Mood:

Click on the **mood** card, then select one of the moods using the radio button below them. 

After inputting the data, click on save and the **X button** at the top right to return to the Overview view. 
Try out all the different moods!

### Sleep:

Click on the **sleep** card, then input the hour of sleeps **(positive numbers only)**. 

After inputting the data, click on save and the **X button** at the top right to return to the Overview view.

### Stress:

Click on the **stress** card, then use the slider to input the desired stress level. 

After inputting the data, click on save and the **X button** at the top right to return to the Overview view. 

**Try out all the different input values!**

### Medication:

Click on the **medication** card, it will bring you to the reminders page. From there, click add reminder on the bottom right.

From there, select the **medical health** category and **medications** subcategory. Then input **the title for the event or the name of the medication** in the **Titles section**. 

Input **the desired date and time** for the medication reminder to occur.  

Afterwards, the user can input the dosage and side-effects and other relevant information in the notes section.

### Sickness:

Click on the **sickness** card, from the dropdown list, select a symptom, then click on **the + button** next to it.

You can add **multiple different symptoms** by selecting another symptom from the dropdown list and click on **the + button** to add it to the list. 

To remove a symptom, click on the **X button** next to the symptom to remove it from the list.

After inputting the data, click on save and the **X button** at the top right to return to the Overview view. 

**Try out all the different symptoms and different combinations!**

### Appointments:

Click on the **appointments** card, it will bring you to the reminders page. From there, click **add reminder** on the bottom right.

From there, select the **medical health** category (or any other ones) and **Appointments** subcategory. 

Then input **the title for the event or the name of the doctor** in the Titles section. 

Input the desired date and time for the appointment. 

Afterwards, the user can input the location and other relevant information in the notes section.

## Trends:

To access the **trends** page, use the side bar and select **Trends**.(Very similar to user trends page)

Click the Weight tab at the top of the page, it will render a line graph displaying the current week of the user's weight.
When you input your weight in the **BMI card** in the overview page, the data of the corresponding day will be updated (i.e. if today is Monday, the Monday data will be updated).

Click the Sleep tab at the top of the page, it will render a bar graph displaying the current week of the user’s hours of sleep.
When you input your sleep hours in the **Sleep card** in the overview page, the data of the corresponding day will be updated (i.e. if today is Monday, the Monday data will be updated).

Click the Stress tab at the top of the page, it will render a bar graph displaying the current week of the user’s stress level.
When you input your stress level in the **Stress card** in the overview page, the data of the corresponding day will be updated (i.e. if today is Monday, the Monday data will be updated).

Click the Calories tab at the top of the page, it will render a line graph displaying the current week of the user’s calories count.
When you input your calories in the **Calories card** in the overview page, the data of the corresponding day will be updated (i.e. if today is Monday, the Monday data will be updated).

## Calendar:

To access the **calendar** page, use the side bar and select **Calendar**.

Click the **Calendar** tab at the top of the page to see all the appointments that the user has within this month.

Click the **Streak** tab at the top of the page to see all the streaks of their goals (physical, mental, medical) that the user has within this month.

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
2. You can dismiss the notification but clicking the  ![img](https://lh4.googleusercontent.com/wSL2J5TS9WzByNODmrX6-g5iwMjZUL0eyfp5rgxWzUUdrtlRfTg7rGAC3ja2ebvb1NG6xhMBSgPjuVVOULbl7Axrb5V10Ork2Q5-5PRCCD_fvO17Nz1t-DvMxAvrghwgvg) on the right of the notification banner. This will remove the banner and the badge



### Complete reminder  ![img](https://lh4.googleusercontent.com/fNfOy-ksDDtujdPxdanXyccaqNnvS41BmuPMf2aIGz_J81TTJilJmxiFG8ooII408RBSe7UD0_n-SfGMccaIDIc9hJJJjgczzTklTSE8UTu4Xs7CnS86fWVjrVB3wYzb2w)

1. Once a reminder has been triggered and a notification is sent, the status of the reminder will be changed to "overdue" and this is indication by the change of the status icon to an ![img](https://lh6.googleusercontent.com/mFvlbfLGwONulKKGoxfkg9IgiFI9B13RZkEMAiRAysLK6uZdi8Q57bqLUBm5MQOpE-YDRv_-C7Hd602FZOVEN9vgVILahKAXwkeknQf653XX8GijpFDI1m6VEkwn9MchFg)
2. Then after you have compeleted the reminder you can change the status to complete by clicking the ![img](https://lh4.googleusercontent.com/fNfOy-ksDDtujdPxdanXyccaqNnvS41BmuPMf2aIGz_J81TTJilJmxiFG8ooII408RBSe7UD0_n-SfGMccaIDIc9hJJJjgczzTklTSE8UTu4Xs7CnS86fWVjrVB3wYzb2w) on the right side of the reminder item

   - This will change the reminder icon status to complete indicated by ![img](https://lh4.googleusercontent.com/Z4_QQDkRVFChCU4w1mvGTKgiaQ8O34f4vsfxX5Up-JfvfchIYYXj4WM0y5Z6CQJ0QzMmHOrHV-LVxszWqWNinPuw9ZI-WiNbLRghIn5qnsSxXeEu0pz5wKhDIu_jaD4Q9Q)

     

### Delete Reminder ![img](https://lh5.googleusercontent.com/yeoYJ82pe5M0zhxGFT80bNHLPNQo2dsX7th-HO32WHGd9CBSzfoB_1eCH0vXJyUzlS4fmwNZNMjQYqpjfmSg-sxiqciiwN03W0eQMAlnt_lHDvvboa_dfVmpYyC2Q4xLZw)

1. If you no longer need the reminder you can remove the reminder(s) you created by clicking the delete (trash can ![img](https://lh5.googleusercontent.com/yeoYJ82pe5M0zhxGFT80bNHLPNQo2dsX7th-HO32WHGd9CBSzfoB_1eCH0vXJyUzlS4fmwNZNMjQYqpjfmSg-sxiqciiwN03W0eQMAlnt_lHDvvboa_dfVmpYyC2Q4xLZw) icon on the right of a reminder item.
2. 


## Check In View

![img](https://lh6.googleusercontent.com/KTjx_ctCWBfdatmw-q_xx_JbfEzZqmZ4nfvgbX_1xHUzYjKp1nYCygT5MGCKFpK8sAMPh7C4T6nQg78NtRTNWo-PomuCitLwACugLtzFcP7zG9929p5dlZXmmzqPfWaAug)

As a regular user you can volenterly check-in to be notified if a place you have recently visited has had a coved case.


### View Place  ![img](https://lh3.googleusercontent.com/HXWCF1l0TeG8dGaGt5gqT7BHM9LgKyxV5_4euoV6Qp1UBoDt2wpDLm8BWqdDQPZq2shTfKZWdQ3qWHAcWwA3f9gW9VWsPuSLNYqhMMq0rpysX2YWuQIqcYht0CnaEHQHQA)

1. you can enter a select a place by typing a name to search of it within the dropdown list or selecting a place from the dropdown list.

2. Once you can selected a place clicke the view place button![img](https://lh4.googleusercontent.com/yc4QDGV9vB_pa-l6bO2p-RNzte4AA0Y7kcZgDL1ZZLmCJ46ojxFbC366QNgdv4TF21wxJ8dCjvBZ4FSL9gkk27rVN-h8K-hyNH6H79qynZ_6xKLyUty6HxpZl7oueI4lnA)

3. Then details about the place will be shown 

   ![img](https://lh4.googleusercontent.com/AZ-29WB4DNZL6wVYR3mRI5UCDKTJUc8YpWK4L1ZFhCUWXSK28p28mNohmyoRKpXE5rwE4bgmjRv5TliLM3E99BWNpIAegFN07ClrgKWZYPZANmAbqKR6f8ESQtmbC3peZA)-	the *Occupancy Limit* is the max number of people allowed in the selected location

   - the *Current Occupancy* is the current number of people at the selected location
   - When the current occupancy is less than the limit a green status will be indicated by ![img](https://lh6.googleusercontent.com/cC-zfg5K-K4uouFwvoPxT7zOS_B32hrOcq0TYkU3JqCxLmjQMQwLGih76qebxalAalO-N_S7GDlT55UiYKP0p19MduiHNcirGjWMNDjlM63UrzHkyo4wcJ761PtMo1yO5Q)and the check-in button will appear![img](https://lh3.googleusercontent.com/A8Nv4-9HuLJlJdvqW21aM-eqEAlSY3RX1L1dXsTBFFvnM1IsifizG0PqG9Se2dyQ3il2n02sg8i7cMGFVRE2sdeLwbG2xGA4LXA0_vSjtBxW9bj5hPWRhg1zoSruTblPgQ)
   - When the curren occupancy is is greater or equal too the limit a bad status will be indicated by![img](https://lh6.googleusercontent.com/mFvlbfLGwONulKKGoxfkg9IgiFI9B13RZkEMAiRAysLK6uZdi8Q57bqLUBm5MQOpE-YDRv_-C7Hd602FZOVEN9vgVILahKAXwkeknQf653XX8GijpFDI1m6VEkwn9MchFg) and there will be no check in button
   - A call will be made to a map API to display the location on a map so the user can know how to get to the selected location 

   

### Check In Button

![img](https://lh6.googleusercontent.com/UX4W9qqHn3rWMOR2a9aAVothp-uZWwGHoXwPQDV2jzwABR_gpFBCjU8wQfX5tzFrajE504T1cZABlsELEEqpHpao5S_BBt70PJtLxqOFbrC6P06O7c3eRCzekIUpsPzdHQ)



1. Click the check-in button ![img](https://lh3.googleusercontent.com/A8Nv4-9HuLJlJdvqW21aM-eqEAlSY3RX1L1dXsTBFFvnM1IsifizG0PqG9Se2dyQ3il2n02sg8i7cMGFVRE2sdeLwbG2xGA4LXA0_vSjtBxW9bj5hPWRhg1zoSruTblPgQ) and  the user will 'checked into' the selected place

   - this will be indicated by the top status bar![img](https://lh5.googleusercontent.com/86WyeJ2TkOjEcwL0A6iRvrCXcYfmQHpJoQA3JhvAUk2SN7g0gOcCtvUCqoHqNb-XtaIB1NLO6OKPP637I_58Wp7Uq-iWromIFqCSNzt9AL8Ds4GPh99ht-lVgQEtIf-k7g)

   - Users are only allowed to be checked into one place at a time, Hwoever users can still view other places

### Check Out

![img](https://lh5.googleusercontent.com/86WyeJ2TkOjEcwL0A6iRvrCXcYfmQHpJoQA3JhvAUk2SN7g0gOcCtvUCqoHqNb-XtaIB1NLO6OKPP637I_58Wp7Uq-iWromIFqCSNzt9AL8Ds4GPh99ht-lVgQEtIf-k7g)

1. When the users is checked in click the checkout button ![img](https://lh3.googleusercontent.com/lIYfdFC22dE5ndmbw5nPZfvzDW-L3095M1qC4ffo2Cw7kwoDHXGAnHKivFkgept65vYM1zYw9dsmf86obC8SCTW8xq93zPmgRPy6ZVN-jeBvBU1Ke9ZAXCl05jEzY6kw9A)to remove the user's check-in status from the current location
   - the message will change to "you are currently not check in anywhere"
   - You will regain the ability to check into other places



**Note:**  Please make sure you, the user, is check-in to one location to see how the COVID alert system works before moving on to the admin instructions
# Instructions for admin:

To login as an admin: 

Username: admin

Password: admin

**To log out, click the logout button and it will redirect you back to the landing page.**

## User: 
Click on **Users** tab on the side bar upon login, and to see all the users.

Click on **the view profile** button to see the details of the user, and click **the back** button to exit the viewing page.

**Note: doing either of this will remove this user from the UI, require refreshing the page and a relog to do the other feature**

Click on the **assign admin** button to make this user an admin.

Click on the **remove** button to remove the user.

## Trends:

To access the **trends** page, use the side bar and select **Trends**.(Very similar to user trends page)

**(These data are all hard coded and will require database call)**

Click the Weight tab at the top of the page, it will render a line graph displaying the current week of the average weight of all users.

Click the Sleep tab at the top of the page, it will render a bar graph displaying the current week of the average hours of sleep for all users.

Click the Stress tab at the top of the page, it will render a bar graph displaying the current week of the average stress level for all users.

Click the Calories tab at the top of the page, it will render a line graph displaying the current week of the average calorie intake for all users.

## Reminders:

Works exactly the same as a regular user’s reminder but only when **adding and editing a reminder, the category options will change**.

Create a new reminder, click on **add reminder** button on the button right, then select **Tasks** for categories, **Marking for Phase 1** as the title, and enter a valid date, **2020-07-25:10:00:PM**, with the format of **YYYY-MM-DDTHH:MM:(AM/PM)**. 

Enter **Hope all the projects are nice** for notes (could leave it blank if you wish).

Editing an existing reminder will be the same as creating a new one. But you click on the **edit icon** on the reminder you would like to edit.

## Check in/ Alert Sys:

### COVID Cases - Geo Locator

A call will be made to google maps API and to a backend database of covid cases which will grab thee cases and populate the map in this section

This will provide the admin with the locations around the area where there are covid cases.

### Add Location

Same as regular users check in pages when trying to check in.

Click on the **add location** button, to add a location for users to check-in on. 

![img](https://i.imgur.com/XvAEMZ5.png)
 
Please enter these: 

Location name: **UTSG**, 

Address: **27 King's College Cir, Toronto**,

Image URL: **https://thevarsity.ca/wp-content/uploads/2019/01/KCC-Victoria-Dawson.jpg**,

Max Occupancy: **500**

Description: **Campus** (could leave it blank).

Click the **Add** button to finish, and this **new location will display on the selection menu** for check in.


### Edit Location
![img](https://cdn.discordapp.com/attachments/713491226577469551/728778692863590440/unknown.png)
In Alert System view select **queens park** and click **view plac** then

Click on the **edit location icon** ![img](https://lh6.googleusercontent.com/gRNuWXtFmZ1tf7Sr9u3_cwKcza2Ao4UJ_R6AcHySyp51nLCm2l3GQmUBYriof0joKUYW8tfyan4L7FzYLcjBdICDsIiVXjTehL3ibq0g8Pk51zBpVOnbunRr_z9Wdrlaag) to change the informaiton about the selected location

 For example change **Max Occupancy** to **1000**

To save the changes made click **edit** button on the bottom left conner

You will be taken back to the alert system view where you can search for **queens park** and varify the Max Occupancy has changed


### Delete Location

Select **UTSG** location from the dropdown list and then click **view place**

Then to delete this location click the delete icon ![img](https://lh5.googleusercontent.com/yeoYJ82pe5M0zhxGFT80bNHLPNQo2dsX7th-HO32WHGd9CBSzfoB_1eCH0vXJyUzlS4fmwNZNMjQYqpjfmSg-sxiqciiwN03W0eQMAlnt_lHDvvboa_dfVmpYyC2Q4xLZw)

The location will be deleted for both admin and users in the alery sys and checkin views, respectively

### Sending a COVID Case Alert
To send a COVID case alert, go to the **Alert Sys** tab on the side bar and under the section menu, select **Queen’s Park** as the location. 

Click **view place** button, and at the button left, click on the **Send Alert** button and a pop up message will display at the bottom where it says “Alert has been sent!”.

![img](https://i.imgur.com/UrsnUJX.png)

Now log on to a **user account**, and it will display the alert that the admin has just create for Queen’s park. Letting all users know that there is a new COVID case at Queen's Park.

![img](https://i.imgur.com/gey6QTu.png)


    
    
    
<br>
<br>
<br>
<br>
<br>
<br>
<br>

**Note: this part onwards is meant for our group**

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
- Go to the server dir: `cd ./server` (make sure you're in the repo dir when you run this cmd)
- Make sure you've installed all app dependencies with `npm install`
- To start the database run: `npm run db`
  - I you're using Windows 10 then open powershell and run: `mkdir ../mongo-data; mongod --dbpath ../mongo-data`
- To start web app in browser run: `npm start` (then open browser and go to `http://localhost:5000/`)
