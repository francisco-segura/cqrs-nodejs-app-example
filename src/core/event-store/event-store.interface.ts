export interface EventStoreMessage {
  streamId: string;
  eventId: string;
  eventNumber: number;
  eventType: string;
  created: Date;
  metadata: object;
  isJson: boolean;
  data: object;
}
