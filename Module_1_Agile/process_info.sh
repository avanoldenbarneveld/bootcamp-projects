#!/bin/bash

# Total number of running processes
process_count=$(ps -e --no-headers | wc -l)

# Total memory occupied by all processes in KB, converted to MB
total_memory_mb=$(ps -e -o rss= | awk '{sum += $1} END {printf "%.2f", sum/1024}')

# Top 5 memory-consuming processes with PID, Name, and %MEM
top_processes=$(ps -eo pid,comm,%mem --sort=-%mem | head -n 6 | tail -n 5)

# Display the results
echo "Total number of processes: $process_count"
echo "Total memory occupied: ${total_memory_mb} MB"
echo -e "\nTop 5 Memory-Consuming Processes:"
echo "PID    Process Name         %MEM"
echo "$top_processes"
