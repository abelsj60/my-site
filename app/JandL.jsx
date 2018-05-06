import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PDF from 'react-pdf-js-infinite';
import storyData from './helpers/storyData.jsx';
import Table from 'rc-table';

var tableData =[
  {
    headline: 'Can Apple Be Out-Appled?',
    publication: 'BlouinNews'
  },
  {
    headline: 'On Innovation: The Bone Doctor\'s Knees, The Clean Air Catalyst, and Cracking the College Code',
    publication: 'Seton Hall Magazine'
  },
  {
    headline: 'Commodity Beckons New TV Services From Comcast, Microsoft...',
    publication: 'BlouinNews'
  },
  {
    headline: 'A Huge Tech Vs. Start-up Battle Simmers',
    publication: 'BlouinNews'
  },
  {
    headline: 'Giving Physics A Good Name',
    publication: 'Seton Hall Magazine'
  },
  {
    headline: 'Breaking news online',
    publication: 'Seton Hall Magazine'
  },
  {
    headline: 'Adventures in State Bailouts',
    publication: 'The Big Money (Slate)'
  },
  {
    headline: 'All Things Considered Digitally',
    publication: 'Forbes'
  },
  {
    headline: 'Boxee Wants To Kill Your Television',
    publication: 'Forbes'
  },
  {
    headline: 'Charting an East/West Passage (to "ambicultural"-ism)',
    publication: 'The Darden Report (UVA)'
  },
  {
    headline: 'Electronic Arts standing firm on USD 26 offer for Take-Two',
    publication: 'FT.com'
  },
  {
    headline: 'GodTube',
    publication: 'Forbes'
  },
  {
    headline: 'How To Get Readers To Really Want You',
    publication: 'Forbes'
  },
  {
    headline: 'Is The Wine Trade Recession-Proof?',
    publication: 'The Darden Report (UVA)'
  },
  {
    headline: 'Live, From The Internet',
    publication: 'Forbes'
  },
  {
    headline: 'Owning The News',
    publication: 'Forbes'
  },
  {
    headline: 'Putting Newspapers On Trial',
    publication: 'Forbes'
  },
  {
    headline: 'Rupert Murdoch: Big Man On Campus',
    publication: 'Forbes'
  },
  {
    headline: 'Slowing Fast Company',
    publication: 'Forbes'
  }
];

class JandL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cPDF: null
    }

    this.getStory = this.getStory.bind(this);
  }

  componentDidMount() {
    var cStory = this.getStory()

    this.setState(
      {
        cPDF: cStory
      }
    )
  }

  getStory() {
    var publication = this.props.publication;
    var storyIndex = this.props.id;

    return storyData[publication][storyIndex - 1]
  }

  render() {

    var columns = [
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

    var columns2 = [
      {
        title: 'Headline', dataIndex: 'headline', key: 'headline', width: '424'
      },
      {
        title: 'Publication', dataIndex: 'publication', key: 'publication', width: '100'
      }
    ];

    return (
      <div id='JnLContainer'>
        <div id='List'>
          <h1>The Story</h1>
          <div>
          <p>I was writing about digital media and technology for Forbes three years after I came to New York to be a professional writer. Here's some of my work.</p>
          <p></p>
          </div>
          <ReactTable
            data={tableData}
            columns={columns}
            defaultPageSize={12}
            showPaginationBottom={true}
            showPageSizeOptions={false}
            showPageJump={false}
            sortable={false}
            className='-highlight'
          />
        </div>
        <div id='PDFStory'>
          {
            this.state.cPDF &&
            <PDF
              file={this.state.cPDF}
              scale={1.3}
            />
          }
        </div>
      </div>
    )
  }

}

export default JandL;
