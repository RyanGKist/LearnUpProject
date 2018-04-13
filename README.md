# LearnUpProject
## Logged in light for student on reading board / Logged in light for the admin on reading board
### Server:
  * In socket join room, based on the length within the room to distinguish the light to on or off
  * also add socket.leave room
  * also add if users > 2 then redirect to index
  * Need to fix: not working if teacher left the room first due to its based on users within the room length, not getting user id
### Client - board.ejs:
  Add var admin, in socket user_joined, addClass if users is equal to 2   
### CSS:
  css for the light
  
## Prevent tiles from being dragged off into space
### Client - board.ejs:
  Add restrict in interact('.draggable')
  
## Board switch
### Client - board.ejs: 
  *Add div to include all back and front side
  *create function switchboard()
  *then emit the button switch click
  *socket on for switch_boards
###Server:
  socket on for switch
  
## Board reset feature for instructor that resets student view as well
### Client - board.ejs:
  fix the reset function

## Fixing Admin login w/o pw problems
### Server:
  fix function in login in users.js
