# AppImage class
<div class='platform-bar-container-div'><div class='platform-bar-div'>Platform:  <b> Images</b>
</div><div class='platform-bar-div'>Language: <b>Csharp</b></div><div class='dropdown-button-container-div'><button class='sdk-language-dropdown-button'>Other languages ▼</button><div class='dropdown-content'>
<a href='../../images/csharp/appimage'>Images Csharp</a>
</div></div><br /><br /></div>




An object returned by check methods such as [Check](./eyes#check-method) to indicate if the check succeeded.

Using statement

    using Applitools;
    	


### IsMatch property
#### Syntax


    bool value = obj.IsMatch;
    

Type: bool

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends if this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched, only that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [Close](./eyes#close-method) method.
