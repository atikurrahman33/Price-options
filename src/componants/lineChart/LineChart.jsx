import { LineChart as Lchart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Student 1", mathMarks: 75 ,phy:50},
        { id: 2, name: "Student 2", mathMarks: 78  ,phy:65},
        { id: 3, name: "Student 3", mathMarks: 92  ,phy:70},
        { id: 4, name: "Student 4", mathMarks: 70  ,phy:75},
        { id: 5, name: "Student 5", mathMarks: 88 ,phy:90},
        { id: 6, name: "Student 6", mathMarks: 95  ,phy:97},
        { id: 7, name: "Student 7", mathMarks: 72  ,phy:44},
        { id: 8, name: "Student 8", mathMarks: 89  ,phy:55},
        { id: 9, name: "Student 9", mathMarks: 84  ,phy:99},
        { id: 10, name: "Student 10", mathMarks: 76  ,phy:84}
      ];
      
    return (
        <div>
           
        
        <Lchart width={500} height={400} data={studentData}>
        <XAxis dataKey="name"/>
            <YAxis dataKey="mathMarks"> </YAxis>
        <Line type="monotone" dataKey="mathMarks" stroke="red" />
        <Line type="monotone" dataKey="phy" stroke="green" />
        </Lchart>
            
        </div>
    );
};

export default LineChart;