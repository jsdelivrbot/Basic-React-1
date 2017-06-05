import React,{Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';


const API_KEY='AIzaSyCDMagnuN1-SmqFA8S3Q8Z5SlHbDhJX2is';


class App extends Component{
   
    constructor(props)
    {
        super(props);
        
        this.state={ videos: [],
                    selectedVideo:null
                   };
        
        this.videoSearch('Cooking');
        
        
            
        }
        
    
videoSearch(term){
            
            YTSearch({key:API_KEY,term:term},(videos)=>{
           
            this.setState({videos:videos,
                           selectedVideo:videos[0] });
            
        });
}
    
    render(){
        const search= _.debounce((searchterm)=>{this.videoSearch(searchterm)},300);
        return(<div>
                    <h1>Kajal's Youtube :)</h1>
                    <SearchBar onSearchTermChange={search}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect ={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
               </div>
              );
    }
    
}
           
ReactDOM.render(<App/>,document.getElementById('container'));