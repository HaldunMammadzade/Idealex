function after(count, func) {
      let times = 0;
      function next() {
            times++;
            if (times >= count) {
                  func();
            }
      }
      return next;
}