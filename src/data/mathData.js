  let puzzle, autoStart;

    const mhypot = Math.hypot,
      mrandom = Math.random,
      mmax = Math.max,
      mmin = Math.min,
      mround = Math.round,
      mfloor = Math.floor,
      msqrt = Math.sqrt,
      mabs = Math.abs;
    //-----------------------------------------------------------------------------
    function isMiniature() {
      return location.pathname.includes('/fullcpgrid/');
    }
    // This function checks whether the current URL path contains the string /fullcpgrid/.