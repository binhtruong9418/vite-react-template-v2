import mqtt from "mqtt";

type CreateMqttClientOptions = {
    setMqttStatus: (status: string) => void;
    setMqttError: (error: string) => void;
    onMessage: (topic: string, message: any) => void;
};

function createMqttClient(
    {
        setMqttStatus,
        setMqttError,
        onMessage,
    }: CreateMqttClientOptions) {

    const host = import.meta.env.VITE_MQTT_HOST!;

    const uniqueId = `mqtt_${Math.random().toString(16).substring(3)}`;

    const connectUrl = `wss://${host}:8084`;

    return mqtt
        .connect(connectUrl, {
            clientId: uniqueId,
            connectTimeout: 4000,
            reconnectPeriod: 1000,
            path: '/mqtt',
        })
        .on('connect', () => {
            setMqttStatus('Connected');
        })
        .on('error', (error: any) => {
            setMqttStatus('Error');
            setMqttError(
                `Name: ${error?.name}\nMessage: ${error?.message}\nCode: ${error?.code}`,
            );
        })
        .on('disconnect', () => {
            setMqttStatus('Disconnected');
        })
        .on('offline', () => {
            setMqttStatus('Offline');
        })
        .on('reconnect', () => {
            setMqttStatus('Reconnecting');
        })
        .on('close', () => {
            setMqttStatus('Disconnected');
        })
        .on('message', (topic: any, message: any) => {
            onMessage(topic, message);
        });
}

export {createMqttClient};