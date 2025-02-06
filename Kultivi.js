// Adiciona o script e a folha de estilo do Plyr
(function() {
    var script = document.createElement("script");
    script.src = "https://cdn.plyr.io/3.7.8/plyr.polyfilled.js";
    script.async = true;
    document.head.appendChild(script);

    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
    script.async = true;
    document.head.appendChild(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.plyr.io/3.7.8/plyr.css";
    document.head.appendChild(link);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://rawcdn.githack.com/MyMidnightOFC/MidnigthTeam/refs/heads/main/Kultivi.css";
    document.head.appendChild(link);

    var style = document.createElement("style");
    style.textContent = `.player-container { width: 100%; } .d-none { display: none; }`;
    document.head.appendChild(style);

    NotPlay = true
    Z = 0
})();

var X
function Material(X) {
    if (!(X)) {
        X = 0
    }
    NotPlay = false
setInterval(() => {
    

    document.querySelectorAll("video")
        .forEach(el => {
            if (el.id !== "player") {
                try {


                    el.currentTime = el.duration + 0.1;
                    el.playbackRate = 1
                } catch (error) {

                }
            }

        });

setTimeout(() => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    
        document.querySelector(".player-container").classList.add("d-none")
}, X);
document.querySelector('video').playbackRate = 1;

    }, 1);
        document.querySelectorAll(".MuiBox-root")[2].classList.remove("d-none")
}

let checkPlyr = setInterval(() => {
    if (typeof Plyr !== "undefined") { // Verifica se Plyr foi carregado
        clearInterval(checkPlyr);
        // Funções para avançar e retroceder vídeo
        function FT() {
            if (window.player) player.currentTime += 10;
        }

        function FT2() {
            if (window.player) player.currentTime -= 10;
        }

        function FT3(X) {
            if (window.player) player.currentTime = X;
        }

        function FT4() {
            if (window.player) return player.currentTime;
        }

        function FT5() {
            if (window.player) player.play();
        }


        // Loop para modificar a página a cada 10ms
        setInterval(() => {
            try {
                var btn = document.querySelector(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary");
                if (btn) {
                    btn.disabled = false;
                    btn.classList = "MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary";
                }

                document.querySelectorAll(".MuiContainer-root.MuiContainer-maxWidthMd, .MuiBox-root.jss157, .MuiBox-root.jss181, .MuiPaper-root.MuiAlert-root.MuiAlert-filledInfo.MuiPaper-elevation0, div[data-ad-player], div[id*='custom-ad-']")
                    .forEach(el => el.remove());

                let target = document.querySelectorAll(".MuiBox-root")[6];

                
                if (target) {
                    let checkPath = target.querySelector(":scope > div > div > div > div > div > a");

                    if (checkPath) {
                        target.remove(); // Remove o .MuiBox-root inteiro
                    }
                }

                document.querySelectorAll(".MuiTypography-root")
                    .forEach(el => {
                        if (el.textContent.includes("Anote pontos importantes da aula e consulte-os")) {
                            el.innerHTML = "Finalize suas aulas com o apertar de 1 botão rapidamente, sem frescuras e de graça!! <b>( Use isso com cuidado! )</b>"
                        }

                        if (el.textContent.includes("E-books exclusivos, simulados e novas")) {
                            el.textContent = "Infelizmente não dá para obter os E-books e os Simulados, mas agora é possível assistir as aulas sem interrupções."
                        }

                        if (el.textContent.includes("um passo a mais com o Kultivi+")) {
                            el.textContent = "Aviso Interessante!"
                        }

                        if (el.textContent.includes("Melhore a sua experiência ")) {
                            el.textContent = "Facilite a sua experiência."
                        }
                    });

                document.querySelectorAll('div[data-ad-player]').forEach(el => el.remove());

                document.querySelectorAll(".MuiTypography-root.jss164.MuiTypography-body1")
                    .forEach(el => el.innerHTML = "Anote pontos importantes da aula e consulte-os sempre que precisar. Você pode usar esse recurso!! Agradeça-me depois..");

                document.querySelectorAll(".MuiList-root").forEach(el => {
                    el.style.backgroundColor = "#fff";
                    el.style.color = "#4f4f4f";
                });

                document.querySelectorAll(".MuiListItemText-secondary").forEach(el => {
                    el.style.color = "#8e9193";
                });

                document.querySelectorAll("iframe, script, img").forEach(el => {
                    if (el.src?.includes("safeframe.googlesyndication")) el.remove();
                });

                document.querySelectorAll("div").forEach(el => {
                    if (el.hasAttribute("data-google-query-id") || el.hasAttribute("data-premium")) el.remove();
                });

                document.querySelectorAll("h3").forEach(el => {
                    if (el.textContent.trim() === "E-books") el.textContent = "E-books (Unavailable)";
                });

                document.querySelector(".videoAdUiSkipButtonExperimentalText")?.click()

                document.querySelectorAll("img").forEach(el => {
                    if (el.src?.includes("cdn-kultivi.s3.amazonaws.com/campaigns")) el.remove();
                });

                document.getElementById("ad_position_box")?.remove();
                t = 0
                if (t < 70) {
                    t += 1

                    setInterval(() => {
                        document.querySelectorAll(".plyr__controls__item.plyr__time--current.plyr__time")
                            .forEach(el => {
                                el.textContent = el.textContent.replace("-", "").replace("-00", "0");
                            });

                        document.querySelectorAll("video").forEach(el => {
                            try {
                                // Verifica se o título é "Advertisement" ou se a classe inclui "cnx-ad-slot"
                                if (el.title === "Advertisement" || el.classList.contains("cnx-ad-slot")) {
                                    el.currentTime = el.duration; // Pula para o final do vídeo
                                }
                            } catch (error) {

                            }
                        });
                        if (NotPlay) {

                            document.querySelectorAll("video")
                                .forEach(el => {
                                        if (el.id !== "player") {
                                            try {


                                                el.playbackRate = 0

                                            } catch (error) {

                                            }
                                        }

                                    }

                                );
                        }
                    }, 10);


                }

                if (window.location.href.includes("course") && window.location.href.includes("lesson")) {
                    document.querySelectorAll(`a[href*="https://planos.kultivi.com/?utm_source=app.kultivi.com"]`).forEach(el => {

                        if (el.textContent.includes("QUERO")) {
                        el.innerHTML = "Finalizar Aula!!";
                        el.target = "";
                        el.href = "javascript: Material();";
                        }
                    });

                }
            } catch (error) {
                console.error("Erro no script:", error);
            }
        }, 1);


        setInterval(() => {
            window.LX = FT4()
        }, 2000);


        // Intercepta requisições para substituir o player
        (function() {
function CreatePlayer(url, timer) {



    const observer = new MutationObserver((mutationsList, observer) => {
        const elemento = document.querySelectorAll(".MuiBox-root")[2];
        if (elemento) {
            console.log("Elemento encontrado!");
            observer.disconnect(); // Para de observar após encontrar o elemento
            var container = document.querySelectorAll(".MuiBox-root")[2];

            // Seleciona o terceiro elemento com a classe .MuiBox-root



            if (container) {

                if (container) {
                    // Limpa o HTML do terceiro .MuiBox-root


                    setInterval(() => {


                               timer = localStorage.getItem(window.location.href + "VideoDuration")
                            if (player.currentTime > parseInt(timer) - 5) {
                                Material(2000)
                            }


                        if (NotPlay) {

                            
                            document.querySelectorAll("video")
                                .forEach(el => {
                                    if (el.id !== "player") {
                                        try {


                                            el.pause();
                                            el.volume = 0;

                                        } catch (error) {

                                        }
                                    }

                                });


                        }





                    }, 0);

                    setInterval(() => {
                        if (NotPlay) {

                        document.querySelectorAll(".MuiBox-root")[2].classList.add("d-none")
                        }
                    }, 1000);

                    // Cria uma nova div
                    let newDiv = document.createElement("div");
                    newDiv.innerHTML = `
    <div class="player-container">
            <video id="player" playsinline controls autoplay>
                <source src="${url + "0.mp4"}" type="video/mp4" size="360">
                <source src="${url + "1.mp4"}" type="video/mp4" size="480">
                <source src="${url + "2.mp4"}" type="video/mp4" size="720">
                Seu navegador não suporta vídeos.
            </video>
        </div>`;
                    newDiv.style.background = "#000";

                    // Adiciona a nova div logo abaixo da div original
                    container.parentNode.insertBefore(newDiv, container.nextSibling);
                }

                const player = new Plyr('#player', {
                    controls: ['play', 'progress', 'current-time', 'mute', 'rewind', 'fast-forward', 'captions', 'pip', 'volume', 'settings', 'fullscreen'],
                    settings: ['speed', 'quality'],
                    autoplay: true,
                    speed: {
                        selected: 1.0,
                        options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
                    },
                });

                Object.defineProperty(player, 'duration', {
                    value: timer, // Define a nova duração (em segundos)
                    writable: true
                });

                lasttime = 0
                document.querySelectorAll('button[data-plyr="quality"]').forEach(button => {
                    button.addEventListener("click", () => {
                        lasttime = window.LX
                        FT3(lasttime)
                    });
                });

                setTimeout(() => {
                    
                FT5()
                }, 1000);
                document.querySelectorAll('button[data-plyr="fast-forward"]').forEach(el => el.addEventListener('click', FT));
                document.querySelectorAll('button[data-plyr="rewind"]').forEach(el => el.addEventListener('click', FT2));
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });




}
            if (localStorage.getItem(window.location.href + "LinkVideo") && true) {
                var url = localStorage.getItem(window.location.href + "LinkVideo").replace("0.mp4", "").replace("1.mp4", "").replace("2.mp4", "")

                if (Z == 0) {
                    Z = 1
CreatePlayer(url, localStorage.getItem(window.location.href + "VideoDuration"))
                }
            } else {
                var originalOpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(method, url, ...rest) {
                    if (url.includes("https://vid.connatix.com/") && !url.includes(".m3u8")) {
                        console.log("Requisição detectada:", url);
                        localStorage.setItem(window.location.href + "LinkVideo", url)
                        var container = document.querySelector(".MuiBox-root.jss146.jss137");
                        if (container) {
                            localStorage.setItem(window.location.href + "VideoDuration", document.querySelector('video').duration)
                            console.log(document.querySelector('video').duration)
                            if (Z == 0) {
                                Z = 1
                            CreatePlayer(url.replace("0.mp4", "").replace("1.mp4", "").replace("2.mp4", ""), document.querySelector('video').duration)
                            }












                        }
                    }
                    return originalOpen.apply(this, [method, url, ...rest]);
                };
            }
        })();

    }
}, 1);
