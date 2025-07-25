type Client = {
    name: string;
    company: string;
    industry: string;
    location: string;
    rating: number;
    posted: number;
    since: string;
};

type ClientInfoProps = {
    client: Client;
};

export default function ClientInfo({ client }: ClientInfoProps) {
    return (
        <div className="bg-white p-4 rounded-md border">
            <h2 className="text-md font-semibold mb-3">Client Information</h2>
            <div className="text-sm text-gray-700 space-y-1">
                <div>{client.name}</div>
                <div className="text-gray-500">{client.company}</div>
                <div>Industry: {client.industry}</div>
                <div>Location: {client.location}</div>
                <div>Rating: ⭐ {client.rating}</div>
                <div>Projects Posted: {client.posted}</div>
                <div>Member Since: {client.since}</div>
            </div>
        </div>
    );
}