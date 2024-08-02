const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_34_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFxTVFGb3lrbUNocWhWcWdhNUZrZ0xPK0paYk56NG5oQnJub1dmZXl6V2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5Mzg2NDQ0NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRDIzMkE4Qzc4MjJFNjdDOTFEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU1NTI0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTM4NjQ0NDU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTQ3Qjc0NTU0QzJGRDRENjEzMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NTUyNTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEpKeEt4RGFTeVN6YnJNMmp0VkpWd1wiLFxuICBcInBob25lSWRcIjogXCI2ODI2YjI1NS1lMGY1LTRkZDEtYjIxYy01OGE1M2Y0NDc1ZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgNDUsXG4gICAgICA4NSxcbiAgICAgIDEwMCxcbiAgICAgIDgwLFxuICAgICAgMTcsXG4gICAgICAyMjYsXG4gICAgICAyMDIsXG4gICAgICA3NCxcbiAgICAgIDI0OCxcbiAgICAgIDkwLFxuICAgICAgNTcsXG4gICAgICAyMDYsXG4gICAgICAyNDgsXG4gICAgICAxMDAsXG4gICAgICAyMSxcbiAgICAgIDE0NyxcbiAgICAgIDEyOCxcbiAgICAgIDIwMCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNTQsXG4gICAgICAxNjEsXG4gICAgICA5LFxuICAgICAgMTc5LFxuICAgICAgMTg0LFxuICAgICAgMzgsXG4gICAgICAxOTcsXG4gICAgICA3MixcbiAgICAgIDIwOCxcbiAgICAgIDkzLFxuICAgICAgMzcsXG4gICAgICAxMjEsXG4gICAgICAxMjAsXG4gICAgICA1OSxcbiAgICAgIDEwMSxcbiAgICAgIDgwLFxuICAgICAgMTY4LFxuICAgICAgNCxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUktDWEdSN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5Mzg2NDQ0NTk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbnRvbmlvXCIsXG4gICAgXCJsaWRcIjogXCIxNjY0MDA0MDQ0ODgzMTA6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZKK1pNREVPZTJzTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQVDR6dGNYVE92UWJrUmgzZ2EyU1FNWm9Xazg2QTJ1VHk3cWhhRnBBakdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBMRlEvRC8rWENFdGRpaVF5QjJEN0FQUmlvaUxvcDlMb1NVV1RQbmU1Z1AzclRUYjJUN0FxbERXdjlpanR6ZGdwak9ONXd1aUljNzlidlBLMEtlMWdnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjl3cGZjQUJXQzNveFIzRXJjVlNUY3lDZmtOcCtjUHhncVBCTGJ3Wmp6NlBZd3JWWStyNUZiZStCb3Z5OFE1KzFkOHJVTG5FVHQvYk5kRFltTUJRMmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM4NjQ0NDU5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU1NTI0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFzQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXNCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmUvVzZZZDBscFI5ZDlhY2YwOHlXNytDb1JESWh3c3dUUkJHWjRSS2pyUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDcxNDQxODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU1NTI0NDgwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
