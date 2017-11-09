using System;

using AppKit;
using Foundation;

namespace MyApp
{
    public partial class ViewController : NSViewController
    {
        private int numberOfTimesClicked = 0;
        public ViewController(IntPtr handle) : base(handle)
        {
        }

        public override void ViewDidLoad()
        {
            base.AwakeFromNib ();

            ClickedLabel.StringValue = "Button has not been clicked yet.";

            // Do any additional setup after loading the view.
        }

        public override NSObject RepresentedObject
        {
            get
            {
                return base.RepresentedObject;
            }
            set
            {
                base.RepresentedObject = value;
                // Update the view, if already loaded.
            }
        }
        partial void ClickedButton (Foundation.NSObject sender) 
        {
            ClickedLabel.StringValue = string.Format("The button has been clicked {0} time{1}", ++numberOfTimesClicked, (numberOfTimesClicked < 2) ? "" : "s");
        }
    }
}