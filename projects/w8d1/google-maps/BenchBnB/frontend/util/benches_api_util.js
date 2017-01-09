export const fetchBenches = () => (
  $.ajax({
    type: "GET",
    url: "/api/benches"
  })
);

export const createBench = bench => (
  $.ajax({
    type: "POST",
    url: "/api/benches",
    data: bench
  })
);
