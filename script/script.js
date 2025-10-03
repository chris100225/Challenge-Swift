document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('monthlyChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago'],
      datasets: [
        {
          label: 'Desempenho',
          data: [20, 35, 45, 55, 65, 70, 80, 90],
          backgroundColor: '#FF6B4A',
          borderRadius: 6,
          barThickness: 20
        },
        {
          type: 'line',
          label: 'Tendência',
          data: [18, 30, 40, 50, 60, 68, 75, 88],
          borderColor: '#FF3A20',
          borderWidth: 2,
          tension: 0.35,
          fill: false,
          pointRadius: 3,
          pointBackgroundColor: '#FF3A20'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { beginAtZero: true }
      }
    }
  });
});
