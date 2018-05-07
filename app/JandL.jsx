import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PDF from 'react-pdf-js-infinite';
import storyData from './helpers/storyData.jsx';
import Table from 'rc-table';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

var tableData =[
  {
    headline: 'Can Apple Be Out-Appled?',
    publication: 'Blouin News',
    stIndex: '1'
  },
  {
    headline: 'On Innovation: The Bone Doctor\'s Knees, The Clean Air Catalyst, and Cracking the College Code',
    publication: 'Seton Hall Magazine',
    stIndex: '2'
  },
  {
    headline: 'Commodity Beckons New TV Services From Comcast, Microsoft...',
    publication: 'Blouin News',
    stIndex: '2'
  },
  {
    headline: 'A Huge Tech Vs. Start-up Battle Simmers',
    publication: 'Blouin News',
    stIndex: '0'
  },
  {
    headline: 'Giving Physics A Good Name',
    publication: 'Seton Hall Magazine',
    stIndex: '1'
  },
  {
    headline: 'Breaking news online',
    publication: 'Seton Hall Magazine',
    stIndex: '0'
  },
  {
    headline: 'Adventures in State Bailouts',
    publication: 'The Big Money (Slate)',
    stIndex: '0'
  },
  {
    headline: 'All Things Considered Digitally',
    publication: 'Forbes',
    stIndex: '0'
  },
  {
    headline: 'Boxee Wants To Kill Your Television',
    publication: 'Forbes',
    stIndex: '1'
  },
  {
    headline: 'Charting an East/West Passage (to "ambicultural"-ism)',
    publication: 'The Darden Report (UVA)',
    stIndex: '0'
  },
  {
    headline: 'Electronic Arts standing firm on USD 26 offer for Take-Two',
    publication: 'FT.com',
    stIndex: '0'
  },
  {
    headline: 'GodTube',
    publication: 'Forbes',
    stIndex: '3'
  },
  {
    headline: 'How To Get Readers To Really Want You',
    publication: 'Forbes',
    stIndex: '10'
  },
  {
    headline: 'Is The Wine Trade Recession-Proof?',
    publication: 'The Darden Report (UVA)',
    stIndex: '1'
  },
  {
    headline: 'Live, From The Internet',
    publication: 'Forbes',
    stIndex: '4'
  },
  {
    headline: 'Owning The News',
    publication: 'Forbes',
    stIndex: '2'
  },
  {
    headline: 'Putting Newspapers On Trial',
    publication: 'Forbes',
    stIndex: '7'
  },
  {
    headline: 'Rupert Murdoch: Big Man On Campus',
    publication: 'Forbes',
    stIndex: '5'
  },
  {
    headline: 'Slowing Fast Company',
    publication: 'Forbes',
    stIndex: '8'
  }
];

class JandL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cPDF: null
    }

    this.getInitialStory = this.getInitialStory.bind(this);
    this.getUpdatedStory = this.getUpdatedStory.bind(this);
  }

  componentDidMount() {
    var cStory = this.getInitialStory();

    this.setState(
      {
        cPDF: cStory
      }
    )
  }

  getInitialStory() {
    var publication = this.props.publication.toLowerCase();
    var storyIndex = this.props.id;

    return storyData[publication][storyIndex - 1];
  }

  getUpdatedStory(event, row) {
    var index = row.original.stIndex;
    var publication = row.original.publication
      .replace(/\s/g, '-')
      .replace(/\.com/g, '')
      .replace(/-\(UVA\)/g, '')
      .replace(/The-Big-Money-\(/g, '')
      .replace(/\)/g, '')
      .toLowerCase();

    console.log('pub:', publication);
    console.log('check:', storyData[publication][index]);

    this.setState(
      {
        cPDF: storyData[publication][index]
      }
    )

    this.props.history.push(`/jnl/${publication}/${index}`);
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
            getTdProps={(state, row) => {
              return {
                onClick: (e) => {
                  this.getUpdatedStory(e, row);
                  }
                }
              }
            }
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

export default withRouter(JandL);

// (e, handleOriginal) => {
//   console.log("A Td Element was clicked!");
//   console.log("it produced this event:", e);
//   console.log("It was in this column:", column);
//   console.log("It was in this row:", rowInfo);
//   console.log("It was in this table instance:", instance);
// }

// getTdProps={(state, rowInfo, column, instance) => {
//   return {
//     onClick: () => this.getUpdatedStory(null, rowInfo.row.publication, rowInfo.index)
//     }
//   }
// }


// rowInfo.row.publication, rowInfo.index


// getTdProps={(state, rowInfo, column, instance) => {
//   return {
//     onClick: (e) => {
//       console.log("A Td Element was clicked!");
//       console.log("it produced this event:", e);
//       console.log("It was in this column:", column);
//       console.log("It was in this row:", rowInfo);
//       console.log("It was in this table instance:", instance);
//       }
//     }
//   }
// }


// ,
//         Cell: row => (
//           <Link
//             key={row.index}
//             to={getUpdatedStory(row, row.original.publication, row.original.stIndex, row.original.headline)}
//             className='projectLink'>{row.original.headline}
//           </Link>
//         )

 // console.log(publication);
    // headline = headline
    //   .replace(/\s/g, '')
    //   .slice(0,11);
      // console.log('hed:', headline);

    // console.log('test:', storyData[publication]
    //   .findIndex(element => {
    //     console.log('inStoryIdx:', element, headline);
    //     // console.log('test:', element.includes(headline));
    //     return element.includes(headline);
    //   }));

    // var storyIndex = storyData[publication]
    //   .findIndex(element => {
    //     return element.includes(headline);
    //   });

    // console.log('pub:', publication, headline, storyIndex);
    // console.log('pub:', publication);
    // console.log('row:', row);
    // index = parseInt(index) + 1
    // return '/jnl/' + publication + '/' + index;

                      // console.log("A Td Element was clicked!");
                  // console.log("It was in this row:", row);
                  // console.log('it was this pub:', row.original.publication);
                  // console.log('It was this hed:', row.original.headline);
                  // console.log('It was this stIndex:', row.original.stIndex);


  // getUpdatedStory(event, publication, index) {
  //   var publication = this.props.publication;
  //   var storyIndex = this.props.id;
  //   // this.props.history.push('/jnl/' + publication + '/' + index);

  //   return storyData[publication][storyIndex - 1];

  // }
