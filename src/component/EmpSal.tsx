
export default function EmpSal() {
    const empData = [
      { Team: "McLaren", Connect: "Mclaren-F1@gmail.com", RacerName: "Deepak", TopSpeed :  "240mph"},
      { Team: "Mercedes", Connect: "Mercedes-F1@gmail.com", RacerName: "Mani", TopSpeed :"230mph" },
      { Team: "AstonMartin", Connect: "AstonMatrin-F1@gmail.com", RacerName: "Lalith", TopSpeed :"212mph" },
      { Team: "Ferrari", Connect: "Ferrari-F1@gmail.com", RacerName: "Venu", TopSpeed :"229mph" },
      { Team: "RedBull", Connect: "RedBullRacing-F1@gmail.com", RacerName: "Hanish", TopSpeed :"236mph"},
    
    ];
  
    // () => ()
  
    return (
      <div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Team</th>
              <th scope="col">Connect</th>
              <th scope="col">RacerName</th>
              <th scope="col">TopSpeed</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.Team}</td>
                    <td>{x.Connect}</td>
                    <td>{x.RacerName}</td>
                    <td>{x.TopSpeed}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
}