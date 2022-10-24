


self.addEventListener('fatch', event => {
    //const offlineResp = new Response(`
    
    //Bienvenidoa mi Pagina Web
    
   // Disculpa, pero no puedes usarla, necesitas inernet
    
    //`);

    const offlineResp = fetch('pages/offline.html');

    const resp = fetch(event.request)
                        .catch( () => offlineResp);

        event.respondWith( resp );
})


