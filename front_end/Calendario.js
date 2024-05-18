

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new calendar.Calendar(calendarEl, {
        
      timeZone: 'UTC',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,

      dayMaxEvents: true, // when too many events in a day, show the popover
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?overload-day'
  });

  var calendar = new calendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'multiMonthYear',
    editable: true,
    events: 'https://fullcalendar.io/api/demo-feeds/events.json'
  });

  calendar.render();
});