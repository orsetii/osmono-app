import { useEffect, useRef, useState } from "react"
import Guacamole from 'guacamole-common-js';

type ViewServerProps = {
    server_id?: number,
    host: string,
    port: number
}


export function ViewServer(props: ViewServerProps) {

    const initialized = useRef(false)

    useEffect(() => {
            if (!initialized.current) {
                initialized.current = true

            console.log(props.server_id);
            // Get display div from document
            var display = document.getElementById("display");
            if (display == null) {
                throw("cant find display");
            }


            let tunnel = new Guacamole.WebSocketTunnel(`ws://localhost:4567/websocket-tunnel?scheme=vnc&hostname=${props.host}&port=${props.port}&width=1024&height=768&undefined=`)
            let guac = new Guacamole.Client(tunnel);



            tunnel.onerror = status => {
                // eslint-disable-next-line no-console
                console.error(`Tunnel failed ${JSON.stringify(status)}`)
            }
            guac.onerror = error => {
                guac.disconnect()
                // eslint-disable-next-line no-console
                console.error(`Client error ${JSON.stringify(error)}`)
              }

            // Instantiate client, using an HTTP tunnel for communications.
            // Add client to display div
            guac.sendSize(1024, 768)
            display.appendChild(guac.getDisplay().getElement());
            
            // Error handler
            guac.onerror = function(error) {
                console.error(error);
            };

            const canvasList = display.getElementsByTagName('canvas');
            console.log(canvasList)
            Array.from(canvasList).forEach(canvas => {
                    canvas.classList.add("guac-canvas");
            });


            // Connect
            guac.connect();

            guac.sendSize(1024, 768)
        }
    }, [])


    return (
        <>
        <div className="h-full w-full" id="display"></div>

        <script type="text/javascript"> 

        </script>
        </>
    )
}