function getGraph() {
  let timeList = [];
  let posList = ["seoul_user", "busan_user", "daegu_user", "incheon_user", "gwangju_user", "daejeon_user"];

  new Chart(document.getElementById("seoul_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '백만 명',
        data: [8, 8, 8, 8, 8, 8, 8, 8, 8],
        backgroundColor: [
          'rgba(255, 206, 86, 1)'
        ],

        borderWidth: 3,
        boderSkipped: false,
      },
      {
        label: '백 명',
        data: [45, 49, 55, 40, 43, 48, 10, 15, 17],
        backgroundColor: ['rgba(255, 99, 132, 1)'],
        bprderColor: 'transparent',
        borderWidth: 3,

        boderSkipped: false,      
      },
      ]
    },
    options: {
      scales: {
        xAxes: {
          ticks: {
            color: 'rgba(255, 255, 255, 2)',
          },
          grid: {
            drawOnChartArea: false
          },
          stacked: true
        },
        xAxes2: {
          grid: {
            drawOnChartArea: false
          },
          labels: [8087499, 8084383, 8083875, 8091903, 8089123, 8087824, 8088680, 8090127, 8088928]
        },
        yAxes: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            color: 'rgba(255, 255, 255, 2)',
          },
          grid: {
            drawOnChartArea: false
          },
        }
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      plugins: {
        title: {
          color: 'rgba(255, 255, 255, 2)',
          display: true,
          text: '서울의 월별 카드 보유자 수',
        },
        legend: {
          display: true,
          position: 'right'},
      }
    },
  },);
  new Chart(document.getElementById("busan_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '부산',
        data: [8273, 8452, 9269, 5483, 5065, 5942, 3804, 3922, 3293],
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
  new Chart(document.getElementById("daegu_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '대구',
        data: [52933, 53259, 54217, 51313, 51770, 52417, 49989, 50436, 50607],
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
  new Chart(document.getElementById("incheon_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '인천',
        data: [51905, 51956, 52651, 58202, 58135, 58489, 67864, 68471, 68756],
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
  new Chart(document.getElementById("gwangju_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '광주',
        data: [751, 1156, 1933, 5067, 5534, 6135, 5295, 5882, 6085],
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
  new Chart(document.getElementById("daejeon_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '대전',
        data: [2280, 2656, 2840, 6956, 7425, 8006, 8974, 9391, 9727],
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
  new Chart(document.getElementById("ulsan_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '울산',
        data: [4501, 4950, 5502, 4042, 4378, 4845, 1090, 1533, 1785],
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
  new Chart(document.getElementById("sejong_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
      datasets: [{
        label: '# of Votes',
        data: [66599, 66739, 66868, 69208, 69360, 69490, 71657, 71802, 71930],
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
  new Chart(document.getElementById("jeju_user"), {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
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

}