const myChart = document.getElementById('myChart');

new Chart(myChart, {
  type: 'bar',
  data: {
    labels: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '제주'],
    datasets: [{
      label: '# of Votes',
      data: [8571, 8635, 8687, 8737, 8807, 8852, 8925, 8989, 8993],
      backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
},
options: {
  scales: {
      y: {
          beginAtZero: true
      }
  }
}
});