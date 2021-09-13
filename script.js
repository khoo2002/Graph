//graph
function barchart(list_x=['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],list_y=[0, 20, 20, 60, 60, 20]){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: list_x,
          datasets: [{
              label: '# of Votes',
              data: list_y,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 5
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}

function linechart(list_x,list_y_1,list_y_2,title_g,label_y,label_x,d_label_y1,d_label_y2){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: list_x,
          datasets: [{
              label: d_label_y1,
              data: list_y_1,
              borderColor: 'rgb(0, 0, 255)',
              tension: 0.1,
              pointStyle:'line',
            },
            {
              label: d_label_y2,
              data: list_y_2,
              borderColor: 'rgb(255, 0, 0)',
              tension: 0.1,
              pointStyle:'line',
            }
          ],
          
      },
      options: {
        plugins: {
              title: {
                    display: true,
                    text: title_g,
                    padding: {
                      top: 10,
                      bottom: 30
                  }
                  },
        },
        scales: {
                x: {
                    display: true,
                    title: {
                      display: true,
                      text: label_x
                    }
                  },
                y: {
                min: 0,
                max: 100,
                display: true,
                    title: {
                      display: true,
                      text:label_y
                    }
                },
        }
      }
  });
}

function toNumber(item, index, arr){
  arr[index] = Number(item);
}

function showValue(x,y1,y2,title,label_x,label_y,d_label_y1,d_label_y2){
  var elem = document.getElementById("myChart");
  elem.parentNode.removeChild(elem);
  var canvas = document.createElement("canvas");
  canvas.id = "myChart";
  document.getElementById("canvas").appendChild(canvas);

  var i_list_x = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  var i_list_y_1=[0, 20, 50, 60, 70, 100];
  var i_list_y_2=[0, 5, 10, 20, 80, 100]
  var i_title_g="S-CURVE";
  var i_label_y="Complete Percentage(%)";
  var i_label_x="Time(Week)";
  var i_d_label_y1="Assumption Work Progress";
  var i_d_label_y2="Actual Work Progress";

  var x_value = document.getElementById(x).value;
  var y1_value = document.getElementById(y1).value;
  var y2_value = document.getElementById(y2).value;
  var title_value = document.getElementById(title).value;
  var label_x_value = document.getElementById(label_x).value;
  var label_y_value = document.getElementById(label_y).value;
  var d_label_y1_value = document.getElementById(d_label_y1).value;
  var d_label_y2_value = document.getElementById(d_label_y2).value;
  var v = document.getElementById("s_charts").value;

  


  var l_x = [];
  var l_y1 = [];
  var l_y2 = [];
  var t_g = "";
  var lb_x = "";
  var lb_y = "";
  var d_lb_y1 = "";
  var d_lb_y2 = "";

  if(x_value!=""){
    l_x = x_value.split(',');
  }else{
    l_x = i_list_x;
  }
  if(y1_value!=""){
    l_y1 = y1_value.split(',');
    l_y1.forEach(toNumber);
  }else{
    l_y1 = i_list_y_1;
  }
  if(y2_value!=""){
    l_y2 = y2_value.split(',');
    l_y2.forEach(toNumber);
  }else{
    l_y2 = i_list_y_2;
  }
  if(title_value!=""){
    t_g = title_value;
  }else{
    t_g = i_title_g;
  }
  if(label_x_value!=""){
    lb_x = label_x_value;
  }else{
    lb_x = i_label_x;
  }
  if(label_y_value!=""){
    lb_y = label_y_value;
  }else{
    lb_y = i_label_y;
  }
  if(d_label_y1_value!=""){
    d_lb_y1 = d_label_y1_value;
  }else{
    d_lb_y1 = i_d_label_y1;
  }
  if(d_label_y2_value!=""){
    d_lb_y2 = d_label_y2_value;
  }else{
    d_lb_y2 = i_d_label_y2;
  }


  if (v == "linechart"){
    linechart(list_x=l_x,list_y1=l_y1,list_y2=l_y2,title_g=t_g,label_y=lb_y,label_x=lb_x,d_label_y1=d_lb_y1,d_label_y2=d_lb_y2);
  }
  else if (v =="barchart"){
    barchart(list_x=x_data,list_y=y_data);
  }
}
