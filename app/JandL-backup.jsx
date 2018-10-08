import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PDF from 'react-pdf-js-infinite';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import storyData from './helpers/storyData.jsx';
import tableData from './helpers/clipData';

class Journalism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cPDF: storyData[this.props.publication][this.props.id],
      stIndex: '',
      pub: ''
    };

    this.getUpdatedStory = this.getUpdatedStory.bind(this);
  }

  componentDidMount() {
    const publicationForState = this.props.publication.replace(/-/g, ' ');
    const stIndexForState = this.props.id + 1;

    this.setState({
      stIndex: stIndexForState.toString(),
      pub: publicationForState
    });
  }

  getUpdatedStory(event, row) {
    const index = parseInt(row.original.stIndex) - 1;
    const routeIndex = row.original.stIndex;

    // preps publication to access pdf file
    const publication = row.original.publication
      .replace(/\s/g, '-')
      .replace(/\.com/g, '')
      .replace(/-\(UVA\)/g, '')
      .replace(/The-Big-Money-\(/g, '')
      .replace(/\)/g, '')
      .toLowerCase();

    this.setState({
      cPDF: storyData[publication][index],
      stIndex: row.original.stIndex,

      // sets selected pub to state (ln 110)
      // forces row to match props when landing
      pub: row.original.publication
        .replace(/\.com/g, '')
        .replace(/ \(UVA\)/g, '')
        .replace(/The Big Money \(/g, '')
        .replace(/\)/g, '')
        .toLowerCase()
    });

    // ~ja History works, but there is no reload?

    this.props.history.push(
      `/journalism/${publication}/${row.original.stIndex}`
    );
  }

  render() {
    const columns = [
      {
        headerClassName: 'my-column-header-group',
        minWidth: 100,
        Header: 'Headline',
        accessor: 'headline'
      },
      {
        headerClassName: 'my-column-header-group',
        maxWidth: 175,
        Header: 'Publication',
        accessor: 'publication'
      }
    ];

    return (
      <main id="journalism-and-law" className="">
        <blockquote>
          I was writing about digital media and technology for Forbes three
          years after I came to New York to be a professional writer. Here's
          some of my work.
        </blockquote>
        <section id="clips" className="left">
          <h1>The Story</h1>
          <p>
            I was writing about digital media and technology for Forbes three
            years after I came to New York to be a professional writer. Here's
            some of my work.
          </p>
          <p />
          <ReactTable
            data={tableData}
            columns={columns}
            defaultPageSize={12}
            showPaginationBottom={true}
            showPageSizeOptions={false}
            showPageJump={false}
            sortable={false}
            className={'-highlight'}
            getTdProps={(state, rowInfo) => {
              return {
                onClick: (e, handleOriginal) => {
                  this.getUpdatedStory(e, rowInfo);
                  if (handleOriginal) {
                    handleOriginal();
                  }
                },
                style: {
                  // forces row to match props when landing
                  // sets style for every row; if row info matches state, then red
                  color:
                    rowInfo &&
                    rowInfo.original.publication
                      .replace(/\.com/g, '')
                      .replace(/ \(UVA\)/g, '')
                      .replace(/The Big Money \(/g, '')
                      .replace(/\)/g, '')
                      .toLowerCase() === this.state.pub
                      ? rowInfo.original.stIndex === this.state.stIndex
                        ? 'red'
                        : 'black'
                      : 'black'
                }
              };
            }}
          />
        </section>
        <section id="pdf" className="right">
          <PDF file={this.state.cPDF} scale={1.5} key={this.state.cPDF} />
        </section>
      </main>
    );
  }
}

export default withRouter(Journalism);
