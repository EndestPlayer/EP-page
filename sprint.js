// 绘制挖矿数据图表
const canvas = document.getElementById('miningGraph');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

const data = [10, 15, 8, 25, 18, 30, 12];
const labels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: '每日挖矿收益',
      data: data,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: '星期'
        }
      },
      y: {
        title: {
          display: true,
          text: '收益 (单位)'
        }
      }
    }
  }
});
