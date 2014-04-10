# DEFCON Audio Plugin
Plays a noise when a matching event is received.

## Prerequisits
1. [DEFCON](http://github.com/acuminous/defcon)
1. A command line audio player, e.g. afplay

## Installation
1. '''cd $DEFCON_INSTALL_DIR'''
2. '''npm install defcon-audio'''
3. '''Enable and configure 'defcon-audio' in your DEFCON configuration file, e.g.
'''json
{
    "plugins": {
        "installed": [
            "defcon-audio"
        ],
        "defcon-audio": {
            "binary": "/usr/bin/afplay",
            "samplesDir": "/var/samples",
            "rules": [
                { 
                    "criteria": { "www-.*", "group": "www", "type": "error", "severity": "1" },
                    "samples": [ 
                        "bad_man.mp3", 
                        "brain_failure.mp3", 
                        "my_pretty.mp3", 
                        "lions_tigers_bears.mp3",
                        "oz_wrath.mp3",
                        "ashamed.mp3"
                    ]
                },
                { 
                    "criteria": { "www-.*", "group": "www", "type": "fixed" },
                    "samples": [ 
                        "witch_is_dead.mp3"
                    ]
                }                
            ]
        }
}
'''
4. Restart defcon (you can do this via '''kill -s USRSIG2 <pid>''' if you want zero downtime)
