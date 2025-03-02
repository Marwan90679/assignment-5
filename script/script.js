function runBtn(id,taskname) {
    document.getElementById(id).addEventListener('click', function() {
      
        document.getElementById(id).disabled = true;
        document.getElementById(id).style.backgroundColor = "rgba(55, 82, 253, 0.3)";
        document.getElementById(id).style.color = "white";

        const strTask = document.getElementById('assigned-tasks-no').innerText;
        const taskNumber = parseInt(strTask);
        document.getElementById('assigned-tasks-no').innerText = taskNumber - 1;

        const strTaskCompleted = document.getElementById('completed-task-no').innerText;
        const completedTasks = parseInt(strTaskCompleted);
        document.getElementById('completed-task-no').innerText =completedTasks + 1;
        alert('Board Updated Successfully')
         if(document.getElementById('assigned-tasks-no').innerText==='0'){
            alert('Congrats!!! You have completed all the current tasks')
         }
        const date = new Date();
        const time =date.toLocaleTimeString();
        
        const taskName = document.getElementById(taskname).innerText;
        const taskHistory = document.getElementById('task-history');
        const p =document.createElement('p')
        p.innerText =`You have completed ${taskName}  at ${time}
        `
        p.classList.add('history')
        taskHistory.append(p)
        
    });
}


runBtn('task1','taskname1');
runBtn('task3' ,'taskname3');
runBtn('task4' ,'taskname4');
runBtn('task5' ,'taskname5');
runBtn('task6' ,'taskname6');





















