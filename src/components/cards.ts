import * as ko from 'knockout';
export default class ViewModel {
  private apiData: any;

  constructor(params) {
    this.apiData = params.apiData;
  }
}

export function cards() {
  ko.components.register('ko-cards', {
    template: require('./cards.html'),
    viewModel: {
        createViewModel: (params, componentInfo) => new ViewModel(params)
    }
  });
}