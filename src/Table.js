import React from "react";

class Table extends React.Component {
  state = {
    countriesData: []
  };
  fechData = () => {
    let api = "https://restcountries.eu/rest/v2/region/africa";
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ countriesData: data }))
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.fechData();
  }
  renderBody = () => {
    let countriesData = this.state.countriesData;
    if (!countriesData.length)
      return (
        <tr>
          <td>Empty Table</td>
        </tr>
      );
    console.log(countriesData.length);
    return countriesData.map(country => (
      <tr id="row">
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.population}</td>
        <td>{country.timezones[0]}</td>
        <td>
          <img width="40px" height="40px" alt="" src={country.flag} />
        </td>
      </tr>
    ));
  };
  render() {
    return (
      <div>
        <table id="countries" align="center" border="1">
          <thead>
            <tr>
              <th> Name </th>
              <th> Capital </th>
              <th> Population </th>
              <th> Timezone </th>
              <th> Flag </th>
            </tr>
          </thead>
          <tbody>{this.renderBody()}</tbody>
        </table>
      </div>
    );
  }
}
export default Table;
