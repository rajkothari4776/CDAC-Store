type Activity = {
  submitted: number;
  lastActive: string;
  avgTime: string;
};

type Props = {
  activity: Activity;
};

export default function ProjectActivity({ activity }: Props) {
    return (
        <div className="bg-white p-4 rounded-md border text-sm text-gray-700">
            <p>{activity.submitted} programmers have submitted proposals</p>
            <p>Last activity {activity.lastActive}</p>
            <p>Average proposal time: {activity.avgTime}</p>
        </div>
    );
}
