import { Component, ElementRef, effect, input, viewChild, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

/**
 * Envoltorio reutilizable de Chart.js (equivalente al uso de chart.js en VetCare).
 * Recrea el gráfico cuando cambian type/data/options.
 */
@Component({
  selector: 'app-chart',
  template: `<div class="chart-host"><canvas #cv></canvas></div>`,
  styles: [`
    .chart-host { position: relative; width: 100%; height: 100%; }
    canvas { max-width: 100%; }
  `]
})
export class ChartComponent implements OnDestroy {
  private canvas = viewChild<ElementRef<HTMLCanvasElement>>('cv');

  type    = input.required<ChartType>();
  data    = input.required<ChartConfiguration['data']>();
  options = input<ChartConfiguration['options']>({});

  private chart?: Chart;

  constructor() {
    effect(() => {
      const ref = this.canvas();
      if (!ref) return;
      const type = this.type();
      const data = this.data();
      const options = this.options();
      this.chart?.destroy();
      this.chart = new Chart(ref.nativeElement, { type, data, options });
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
