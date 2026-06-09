const problems = [
    {
        id:1,
        title:"Internet Connection Not working",
        category:"Network",
        description:"Device cannot connect to WiFi or ethernet",
        solution:"1.Restart your router\n 2.Check if wifi is enable on your device\n 3.Forget the network and reconnect\n 4.Update network drivers\n 5.If still not working,contact ISP"
    },
    {
        id:2,
        title:"Computer Running Slow",
        category:"Performance",
        description:"Computer takes time to open application or respond",
        solution:"1.Check disk usage and free up space\n 2.Disable startup programs.\n 3.Update drivers and OS.\n 4.Run disk cleanup and defrag.\n 5.Increase RAM if needed.\n 6.Scan for malware."
    },
    {
        id:3,
        title:"WiFi Password Not Accepted",
        category:"Network",
        description:"WiFi keeps rejecting the correct password",
        solution:"1.Restart your device\n 2.Check caps lock is off\n 3. Reset WiFi settings\n 4. Restart the router\n 5.Check if WiFi band is compatible\n 6.Update drive drivers"
    },
    {
       id:4,
        title:"USB Device Not Recognized",
        category:"Hardware",
        description:"USB drive or external device not showing up",
        solution:"1.Try a different USB port\n 2.Restart the computer.\n 3.Update USB drivers.\n 4.Check Device Manager for unknown devices.\n 5.Try on another computer to verify  device works.\n 6.Format the drive if corrupted."  
    },
    {
      id:5,
        title:"Screen Display Issues",
        category:"Hardware",
        description:"Moniter not displaying correctly or no signal",
        solution:"1.Check monitor power cable and connections\n 2. Verify HDMI/Display Port connections\n 3. Restart computer\n 4. Update graphics drivers\n 5. Try different display cable\n 6. Test with external monitor"  
    },
    {
        id:6,
        title:"Weak WiFi Signal",
        category:"Network",
        description:"WiFi signal is to weak or keep dropping",
        solution:"1.Move closer to router\n 2. Remove obstacles between and router\n 3. Restart router\n 4. Change WiFi channel(2.4GHz:1,6,11)\n 5.Upate router firmware\n 6. Consider WiFi extender or mesh network" 
    },
    {
        id:7,
        title:"Keyboard or Mouse Not Working",
        category:"Hardware",
        description:"Input devices are not responding",
        solution:"1.Check device batteries/power\n 2. Restart Computer/laptop\n 3. Reconnect USB cable or re-pair wirless device\n 4. Update device drivers\n 5. Check device Manager for errors\n 6. Try different USB port" 
    },
    {
         id:8,
        title:"Password Keeps Getting Hacked",
        category:"Security",
        description:"Account compromised despite changing password",
        solution:"1.Change password from secure device\n 2. Enable 2-factor authentication\n 3. Run malware scan\n 4. Check browser extensions\n 5. Review account activity logs\n 6.Use unique strong password"
    },
    {
         id:9,
        title:"Suspicious Pop-ups Appearing",
        category:"Security",
        description:"Unwanted advertisments and pop-ups on browser",
        solution:"1.Clear browser cache and cookies\n 2. Remove browser extensions\n 3. Run antivirus scan\n 4. Update browser setting for unwanted homepae\n 5.Install blocker extension." 
    },
    {
     id:10,
        title:"File suddenly Missing",
        category:"Software",
        description:"Documents or files dissapeared from hard driver",
        solution:"1.Check Recycle Bin\n 2.Use file recovery software.\n 3.Check file properties history.\n 4.Look in backup folders.\n 5.Scan for viruses.\n 6.Contact recovery service if critical."
    },
    {
        id:11,
        title:"Software freezes or Crashes",
        category:"Software",
        description:"Application become unresponsive frequentyly",
        solution:"1.Restart the application \n 2. Update software to Insert version\n 3. Check available disk space\n 4. Reinstall the application\n 5. Update drivers and OS\n 6. Disable hardware acceleration"
    },
    {
    id:12,
        title:"Printer Not Printing",
        category:"Hardware",
        description:"Printer is offline or not responding",
        solution:"1. Restart printer\n 2. Check paper and ink levels\n 3. Clear print queue\n 4. Reinstall printer drivers\n 5. Check USB connection\n 6. Reset printer to factroy settings "
    }
];
function renderProblems(filterProblems){
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = filteredProblems.map(problem => `
        <div class ="problem-list">
          <div class="problem-header">
          <h3> class="problem-title">${problem.title}</h3>
          <span class="category-ab">${problem.category}</span>
            </div>
            <p class="problem-description">${problem.description}</p>
            <button class="solution-btn" onclick="showSolution(event,${problem.id})">Show Solution</button>
            <div class="problem-solution" id="solution-${problem.id}">
            <div class="solution-tt">Solution:</div>
            <div class="solution-te">${problem.solution}</div>
            </div>
        </div>
    `).join("");
}
function