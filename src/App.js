import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import { BeatLoader } from 'react-spinners';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    
    padding: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      salary : 5000,
      buyGame : false,
      doYouknowFps : false,
      doYouPlayFps : false,
      doYouPlayMoba : false,
      loading : true,
      calculate : false,
      play : false,
    }
  }
  componentDidMount(){
    setTimeout(()=>this.setState({loading :false}) , 1000)
    
  }
  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onBuyGame(){
    this.setState({
      buyGame : !this.state.buyGame
    })
  }
  onDoYouknowFps(e){
    
    this.setState({
      doYouknowFps : !this.state.doYouknowFps
    })
  }
  onDoYouPlayFps(){
    this.setState({
      doYouPlayFps : !this.state.doYouPlayFps
    })
  }
  onDoYouPlayMoba(){
    this.setState({
      doYouPlayMoba : !this.state.doYouPlayMoba
    })
  }
  onSubmit(){
    // this.setState({calculate : true , loading : true})
    this.setState({loading : true})
    let NotPlay_LowIncomeProb = 0.47311828;
    let NotPlay_VeryLowIncomeProb = 0.37634409;
    let NotPlay_HighIncomeProb =0.05376344;
    let NotPlay_MediumIncomeProb =0.04301075;
    let NotPlay_VeryHighIncomeProb = 0.05376344;
    let NotPlay_NoPlayFpsProb = 0.4;
    let NotPlay_PlayFpsProb= 0.6;
    let NotPlay_PlayMobaProb = 0.56666667;
    let NotPlay_NoPlayMobaProb = 0.43333333;
    let NotPlay_BuyGameProb = 0.65555556;
    let NotPlay_NotBuyProb = 0.34444444;
    let NotPlay_KnowFpsProb = 0.81111111;
    let NotPlay_DontKnowFpsProb = 0.18888889;
    let Play_LowIncomeProb = 0.272;
    let Play_VeryLowIncomeProb = 0.64;
    let Play_HighIncomeProb =0.056;
    let Play_MediumIncomeProb =0.024;
    let Play_VeryHighIncomeProb = 0.008;
    let Play_NoPlayFpsProb = 0.03278689;
    let Play_PlayFpsProb= 0.96721311;
    let Play_PlayMobaProb = 0.40983607;
    let Play_NoPlayMobaProb = 0.59016393;
    let Play_BuyGameProb = 0.93442623;
    let Play_NotBuyProb = 0.06557377;
    let Play_KnowFpsProb = 0.99180328;
    let Play_DontKnowFpsProb = 0.00819672;

               let income1 = 1;
               let income2 = 1;
               let fps1;
               let fps2;
               let moba1; 
               let moba2;
               let game1;
               let game2;
               let knowfps; 
               let notknowfps;
               
                if(this.state.salary == 5000){ 
                         income1=Play_VeryLowIncomeProb ;
                         income2 =NotPlay_VeryLowIncomeProb;}
                    else if(this.state.salary == 10000){
                            income1=Play_LowIncomeProb ;
                            income2 = NotPlay_LowIncomeProb;}
                           else if(this.state.salary == 15000){
                                    income1=Play_MediumIncomeProb ; 
                                    income2 = NotPlay_MediumIncomeProb;}
                               else if(this.state.salary == 25000){
                                        income1 = Play_HighIncomeProb ; 
                                        income2= NotPlay_VeryHighIncomeProb;}
                                   else if(this.state.salary == 35000){
                                            income1 =Play_VeryHighIncomeProb ;
                                            income2 = NotPlay_VeryHighIncomeProb;}
                
                if(this.state.doYouPlayFps){
                    fps1 = Play_PlayFpsProb ; 
                    fps2 = NotPlay_PlayFpsProb;}
                    else {
                       fps1 = Play_NoPlayFpsProb; 
                       fps2 = NotPlay_NoPlayFpsProb;}
                
                if(this.state.doYouPlayMoba){
                    moba1 = Play_PlayMobaProb; 
                    moba2 = NotPlay_PlayMobaProb;}
                    else{
                        moba1 = Play_NoPlayMobaProb; 
                        moba2 = NotPlay_NoPlayMobaProb;}
                
                if(this.state.buyGame){
                    game1 = Play_BuyGameProb;
                    game2 = NotPlay_BuyGameProb;}
                    else{
                        game1 = Play_NotBuyProb;
                        game2 = NotPlay_NotBuyProb;}
                
                if(this.state.doYouknowFps){
                    knowfps = Play_KnowFpsProb; 
                    notknowfps = NotPlay_KnowFpsProb;}
                    else{
                        knowfps = Play_DontKnowFpsProb; 
                        notknowfps = NotPlay_DontKnowFpsProb;}
                
                let sumplay = 0.57619048 * income1 * fps1 * moba1 * game1 * knowfps ;
                let sumnotplay = 0.42380952 * income2 * fps2 * moba2 * game2 * notknowfps ;
                console.log(sumplay)
                console.log(sumnotplay)
                if(sumplay>sumnotplay){
                  setTimeout(()=>this.setState({play : true , loading : false , calculate : true}) , 1000)
                  
                }else {
                  setTimeout(()=>this.setState({play : false , loading : false , calculate : true}) , 1000)
                  
                }

              
  }
  render() {
    const {classes} = this.props;
   
    return (
        <div style={container}>
          {this.state.calculate ? 
          
        
          <Dialog
            open={this.state.calculate}
            onClose={()=>this.setState({calculate : false})}
          >
           <DialogTitle id="alert-dialog-slide-title" variant="h3">
            {"ผลการทำนาย : " }
            <Typography style={{display : "inline"}} variant="h3" component="h5">
              { (this.state.play ? "เล่น" : "ไม่เล่น!!")}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" >
              
            </DialogContentText>
          </DialogContent>
          </Dialog>
          :
          <div>
          {this.state.loading == true ?
          
          <Dialog
            fullScreen
            open={this.state.loading}
            
          >
            <div  style={{height :"100%" , width :"100%",backgroundColor : "rgb(153,153,153)" }}>
            <div style={{textAlign :"center" , marginTop : "300px" ,opacity : 0.5}}>
                <BeatLoader 
                    loading={this.state.loading}
                    sizeUnit={"px"}
                    size={30}
                    color={'#ffffff'}
                />
                <Typography style={{color :"white",textAlign : "center" , padding : "30px" , fontWeight :"bold"}} variant="h5" component="h5">
                 Loading...
                </Typography>
                </div> 
            </div>
          </Dialog>
         :
          <div  className={classes.root} elevation={1} style={selectionContanier}>
            <Paper style={{marginTop :"0px"}} >
              <div>
              <div style={{justifyContent : "center"}}>
                <div style={{textAlign : "center" , marginTop : "10px"}}>
                <img src="https://1000logos.net/wp-content/uploads/2018/01/overwatch-logo.png" alt="Smiley face" width="290" height="165"/>
                </div>
                <Typography style={{textAlign : "center" , padding : "0px 30px" }} variant="h5" component="h3">
                  ทายว่า...ปัจจุบันคุณเล่น Overwatch อยู่หรือเปล่า
                </Typography>
              </div>
              <div style={{flexDirection: "row" , display : "flex" , alignItems : "space-around",justifyContent : "space-around" }}>
              <div>
                <div style={{}}>
                <div>
                  <FormControl style={{flexDirection :"row" , width :"100%"}} className={classes.formControl}>
                    <FormLabel style={{marginTop : "7px" , marginRight : "5px"}} component="legend" >รายได้เฉลี่ย/เดือน</FormLabel>
                
                    <Select
                      style={{width :"60%" , textAlign : "center"}}
                      onChange={(e)=>this.onChange(e)}
                      name="salary"
                      
                      inputProps={{
                        name: 'salary',
                        id: 'age-simple',
                      }}
                      value={this.state.salary}
                    >
                      
                      <MenuItem value={5000}>{"< 5000 บาท"}</MenuItem>
                      <MenuItem value={10000}>{"5000 - 15000 บาท"}</MenuItem>
                      <MenuItem value={15000}>{"15001 - 25000 บาท"}</MenuItem>
                      <MenuItem value={25000}>{"25001 - 35000 บาท"}</MenuItem>
                      <MenuItem value={35000}>{"> 35000 บาท"}</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                </div>
                <div style={{flexDirection : "row"}}>
                  <div>
                  <div style={{flexDirection :"row" , display :"flex" , justifyContent : "space-around"}}>
                  <div >
                    <FormControl style={{flexDirection :"column"}} component="fieldset" className={classes.formControl}>
                      <FormLabel  component="legend" >ซื้อเกมออนไลน์หรือไม่</FormLabel>
                      <RadioGroup
                        aria-label="Gender"
                        name="buyGame"
                        className={classes.group}
                        value={this.state.buyGame}
                        onChange={(e)=>this.onBuyGame(e)}
                        style={{flexDirection : "column"}}
                      >
                        <FormControlLabel value={true} control={<Radio />} label="Buy" />
                        <FormControlLabel value={false} control={<Radio />} label="NoBuy" />
                      
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                  <FormControl component="fieldset" className={classes.formControl}>
                      <FormLabel component="legend" >เล่นเกมประเภท MOBA หรือไม่</FormLabel>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.doYouPlayMoba}
                        onChange={(e)=>this.onDoYouPlayMoba(e)}
                        style={{flexDirection : "column"}}
                      >
                        <FormControlLabel value={true} control={<Radio />} label="Buy" />
                        <FormControlLabel value={false} control={<Radio />} label="NoBuy" />
                      
                      </RadioGroup>
                    </FormControl>
                  </div>
                  </div>
                  </div>
                  <div>
                  <div style={{flexDirection :"row" , display :"flex" , justifyContent : "space-around"}}>
                  <div>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" >รู้จักเกมประเภท FPS หรือไม่</FormLabel>
                      <RadioGroup
                        aria-label="Gender"
                        name="doYouknowFps"
                        className={classes.group}
                        value={this.state.doYouknowFps}
                        onChange={(e)=>this.onDoYouknowFps(e)}
                        style={{flexDirection : "column"}}
                      >
                        <FormControlLabel value={true} control={<Radio />} label="Buy" />
                        <FormControlLabel value={false} control={<Radio />} label="NoBuy" />
                      
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                  <FormControl component="fieldset" className={classes.formControl}>
                      <FormLabel component="legend" >เล่นเกมประเภท FPS หรือไม่</FormLabel>
                      <RadioGroup
                        aria-label="Gender"
                        name="doYouPlayFps"
                        className={classes.group}
                        value={this.state.doYouPlayFps}
                        onChange={(e)=>this.onDoYouPlayFps(e)}
                        style={{flexDirection : "column"}}
                      >
                        <FormControlLabel value={true} control={<Radio />} label="Buy" />
                        <FormControlLabel value={false} control={<Radio />} label="NoBuy" />
                      
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                  </div>
                </div>
                
               
                <div>
               
                </div>
              </div>
              {/* <div>
                <div>
                    <FormControl className={classes.formControl}>
                      <FormLabel component="legend" >ผลการทำนาย : bsphjfsojgfsohjsod</FormLabel>
                  
                  
                    </FormControl>
                  </div>
              </div> */}
              </div>
              </div>
            
            </Paper>
          
            <div style={{padding : "20px"}}>
            {
              this.state.loading == true ? <div></div>:
            
              <Button onClick={()=>this.onSubmit()} variant="contained" color="secondary" className={classes.button}>
                Predict
              </Button>
            }
            </div>
          </div>
          }
          </div>
          }
        </div>
      );
  }
}
const container=  {
  minHeight : "100vh",
  display : "flex",
  flexDirection:"column",
  background : "url(http://i.imgur.com/Bof5rAn.png)",
  
  backgroundRepeat:"no-repeat",

  backgroundSize:"cover",
}
const selectionContanier = {
  display : "flex",
  flexDirection:"column",
  alignItems : "center",
  justifyContent : "center"
}
const headerContainer = {
  display : "flex",
  justifyContent : "center"
}
export default withStyles(styles)(App);
