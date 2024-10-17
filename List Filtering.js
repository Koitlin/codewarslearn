function filter_list(l) {
    return l.map(i => (Number.isInteger(i) ? i : '')).filter(i => i !== '');
  }