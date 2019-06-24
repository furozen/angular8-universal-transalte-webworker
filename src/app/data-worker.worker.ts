/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);

  setTimeout(()=>{
    postMessage({
      type:'command',
      command:'update',
      data:{id:1}
    })
  }, 3000);

});
