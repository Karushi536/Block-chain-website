pragma solidity ^0.5.16;

contract Voting {
    // Event emitted when a candidate is added
    event AddedCandidate(uint candidateID);

    // State variables
    address public owner;
    uint public numCandidates; // Declare public state variables to access them directly
    uint public numVoters;

    // Structs
    struct Voter {
        bytes32 uid;
        uint candidateIDVote;
    }

    struct Candidate {
        bytes32 name;
        bytes32 party;
        bool doesExist;
    }

    // Mappings
    mapping (uint => Candidate) public candidates;
    mapping (uint => Voter) public voters;

    // Constructor
    constructor() public {
        owner = msg.sender;
    }

    // Modifier to restrict access to the owner
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    // Function to add a candidate
    function addCandidate(bytes32 name, bytes32 party) public onlyOwner {
        uint candidateID = numCandidates++;
        candidates[candidateID] = Candidate(name, party, true);
        emit AddedCandidate(candidateID);
    }

    // Function to allow voting
    function vote(bytes32 uid, uint candidateID) public {
        if (candidates[candidateID].doesExist) {
            uint voterID = numVoters++;
            voters[voterID] = Voter(uid, candidateID);
        }
    }

    // Function to get total votes for a candidate
    function totalVotes(uint candidateID) public view returns (uint) {
        uint numOfVotes = 0;
        for (uint i = 0; i < numVoters; i++) {
            if (voters[i].candidateIDVote == candidateID) {
                numOfVotes++;
            }
        }
        return numOfVotes;
    }

    // Function to get number of candidates
    function getNumOfCandidates() public view returns (uint) {
        return numCandidates;
    }

    // Function to get number of voters
    function getNumOfVoters() public view returns (uint) {
        return numVoters;
    }

    // Function to get candidate information
    function getCandidate(uint candidateID) public view returns (uint, bytes32, bytes32) {
        return (candidateID, candidates[candidateID].name, candidates[candidateID].party);
    }
}
