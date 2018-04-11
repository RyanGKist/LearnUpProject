# LearnUpProject
1. Logged in light for student on reading board / Logged in light for the admin on reading board
*Server:
  In socket join room, based on the length within the room to distinguish the light to on or off
  also add socket.leave room
  also add if users > 2 then redirect to index
*Client - board.ejs:
  Add var admin, in socket user_joined, addClass if users is equal to 2   
*CSS:
  css for the light
  
2. Prevent tiles from being dragged off into space
*Client - board.ejs:
  Add restrict in interact('.draggable')
  
3. Board switch
*Client - board.ejs: 
  Add div to include all back and front side
  create function switchboard()
  then emit the button switch click
  socket on for switch_boards
*Server:
  socket on for switch
  
4. Board reset feature for instructor that resets student view as well
*Client - board.ejs:
  fix the reset function

5. Fixing Admin login w/o pw problems
*Server:
  fix function in login in users.js
