//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdUMGs3cEh5VUJ6aHY5K1JxVy8rUGNyekdPbDh6NnRBQWUxMzhGVmYxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjRiaXVvcTBjdXBqVXVHSytCWUhqNkpPM1k4cUdQNzZXZllPN3N3cUIxcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TFVCWE92RTJqMEI5cXRDTWVFUTVTVmhaVVl6cEEwa3VqcjBaS0NJSDBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGWHRabzd4LzhjZlkvVmNPeWkrU3psd3JpZUVHaEs3RVNpelJGSEpuam5NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQUVVubldiMDBEazcvVk1wNVpaeTNSUlc2SW5LSUc3ZnBIL3pCSmd1SHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFQk4rekVLLzRaSjJncXpBRDNHZzRGaTdzcERuUjhSREtiQ1kzY3pvSG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09xWmc1ck9oekFmYlZ5REFsblNtTXRKdlJ4UExzbm1meHNRWjkzZ1JYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVVvaVNIUHQwWmxjVGV5c0MzQlg5WnJlN2JEamVDUTRRdFNzTnpOMm9SZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRrS2t2ODBtOEdUMndHQ1I5cTZld2ZaQzk1QmE1ZWNhWUFmNEVBVHQ5blI4aEVKd2x0K2lnM2xUM1dVZWZXTjZmSVMzOG9pa3AzSEdwN0NiRzlBSURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6Ik5iNFZSRk1RdUg2NndUeWovUkRhK3F3MGlxY0NQSFFYcktFc2pmOVcyclk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1nZG9DeUdlU3dhMFctM0xKMkd4UEEiLCJwaG9uZUlkIjoiMGViNzAxMmQtZjIyMC00YzY5LWJmNzQtYmEzODNmOGYzM2RhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdjRzZNaTQ5emVMRDhxemU1Z3RCbFJXOXBxdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMFJBeDkvTFY0Ryt0SjN0WGt6VWFOcXh5RFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVhRR0QxN1QiLCJtZSI6eyJpZCI6Ijk0NzQxMjUyODc2OjgxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN5YmVyIGNoYW51IiwibGlkIjoiMTk0MjY2MjUyOTY4MTE4OjgxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmpxeFBRQ0VJaXdoY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK1pyT0ZHdWF0bEpPUVo3VG80eTRDTnhja3RFVnNBVjJQR1hMa0ZEWWdXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiblozcGcwNDFDSmp0OXlKQ1FjQnBGZzA4c09FckZCWTM3bmdVZHZGWEhYaWJTcGNIOUlCREpyWDZVSk5YTDFVREt5NUl1N3VCVUI4Y3VJR0NZQnVmQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikl5RkZ2eTNiYW9DNXo5VGdjbEZjWU5GU3haakJPWWJLNXVSVm9FZHhMcEJQbWRFWFVscC9FNElhaXZEZlQ2N09PemEySmpYZEluTWhyWEx3amxNREFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDEyNTI4NzY6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZm1hemhScm1yWlNUa0dlMDZPTXVBamNYSkxSRmJBRmRqeGx5NUJRMklGdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDA0MzEwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94741252876",
  PASSWORD: 
    process.env.PASSWORD || "chanuga5315",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94713651846", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
