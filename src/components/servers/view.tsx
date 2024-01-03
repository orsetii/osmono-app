import { useEffect, useRef } from "react"
import Guacamole from 'guacamole-common-js';
export function ViewServer({server_id}) {

    const initialized = useRef(false)

    useEffect(() => {
            if (!initialized.current) {
                initialized.current = true

            console.log(server_id);
            // Get display div from document
            var display = document.getElementById("display");
            if (display == null) {
                throw("cant find display");
            }

            let tunnel = new Guacamole.WebSocketTunnel("ws://localhost:4567/websocket-tunnel?scheme=vnc")
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
            display.appendChild(guac.getDisplay().getElement());
            
            // Error handler
            guac.onerror = function(error) {
                console.error(error);
            };

            // Connect
            guac.connect();
        }
    }, [])


    return (
        <>
        <div className="h-screen w-screen" id="display"></div>

        <script type="text/javascript"> 

        </script>
        </>
    )
}