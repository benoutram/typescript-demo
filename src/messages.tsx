/**
 * Created by Ben Outram on 09/11/15.
 */

/// <reference path="../typings/tsd.d.ts" />

module Messages {

    export class Messages {
        messages: Array<DemoMessageProps> = [];

        log(label: string, message: any) {
            this.messages.push({
                label: label,
                message: message
            });
        }

        render() {
            React.render(<DemoMessages messages={this.messages} />, document.getElementById('main'));
        }
    }

    var DemoMessages = React.createClass<DemoMessagesProps, any>({
        render: function() {
            return (
                <ul>
                {
                    this.props.messages.map(function (x, i) {
                        return <DemoMessage label={x.label} message={x.message} / >;
                    })
                }
                </ul>
            );
        }
    });

    var DemoMessage = React.createClass<DemoMessageProps, any>({
        render: function() {
            return (
                <li><p>{this.props.label}: {this.props.message}</p></li>
            );
        }
    });

    interface DemoMessagesProps {
        messages: Array<DemoMessageProps>
    };

    interface DemoMessageProps {
        label: string,
        message: any
    };

}
